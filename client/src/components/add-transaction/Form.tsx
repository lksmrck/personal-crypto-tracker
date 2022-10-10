import React, { useState, useRef, useEffect, useContext } from "react";
import Input from "../Input";
import { StyledForm } from "./styled";
import { Button } from "@mui/material";
import DashboardContext from "../../state/DashboardContext";
import FormContext from "../../state/FormContext";
import CryptoSelect from "./CryptoSelect";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import {
  addHolding,
  updateHolding,
  deleteHolding,
} from "../../state/actions/holdings";
import { addTransaction } from "../../state/actions/transactions";
import TransactionType from "./TransactionType";
import { lsUserId } from "../../utils/ls-userId";
import { RootState } from "../..";
import updateHoldingStatistics from "./updateHoldingStatistics";
import { HoldingItem } from "../../common/modelTypes";
import { FormItem } from "../../common/modelTypes";

const userId = lsUserId();

const initialState = {
  transactionType: "buy",
  userId,
  name: "",
  price: "",
  amount: "",
  date: "",
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState(initialState);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [existingHolding, setExistingHolding] = useState<HoldingItem>();

  const [loggedUserId, setLoggedUserId] = useState();
  const [formIsValid, setFormIsValid] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const holdings = useAppSelector((state: RootState) => state.holdings);

  const context = useContext(DashboardContext);

  const formContext = useContext(FormContext);

  useEffect(() => {
    context?.getDashboardData();
    setLoggedUserId(lsUserId());
  }, []);

  useEffect(() => {
    setFormData({
      ...formData,
      name: formContext?.selectedCrypto!,
      transactionType: formContext?.transactionType!,
    });
    const existingItem = holdings.find(
      (holding: HoldingItem) => holding.name === formContext?.selectedCrypto!
    );
    setExistingHolding(existingItem);
  }, [formContext?.selectedCrypto, formContext?.transactionType]);

  /*   useEffect(() => {
    setFormIsValid(true);
  }, [inputName, buySell]); */

  const selectedCryptoInput = (crypto: string) => {
    //NEW
    setFormData({ ...formData, name: crypto });
    /* setInputName(crypto); */
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formIsValid) {
      setFormIsValid(true);
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    const existingItem = holdings.find(
      (holding: HoldingItem) => holding.name === formData.name
    );
    console.log(formData.name);
    console.log("zacatek - existingItemm" + existingItem);

    //Validace, že nedavam transakci, kdy prodam vic nez aktualne drzim v Holdings - pak se prirazuje formIsValid state.
    if (
      (formData.transactionType === "sell" &&
        existingItem.amount >= formData.amount) ||
      formData.transactionType === "buy"
    ) {
      setFormIsValid(true);
      //FORM ITEM DÁT PRYČ

      const adjustedFormItem = {
        ...formData,
        price: parseInt(formData.price),
        amount: parseInt(formData.amount),
      };

      //Clearing inputs
      if (formRef.current !== null) {
        formRef.current.reset();
      }
      /*  setInputName(""); */

      formContext?.setFormShown(false);

      if (existingItem !== undefined) {
        const updatedHolding = updateHoldingStatistics(
          existingItem,
          adjustedFormItem
        );
        if (updatedHolding.amount != 0) {
          console.log("dispatchuju update");
          console.log(updatedHolding);
          dispatch(updateHolding(adjustedFormItem.name, updatedHolding));
        } else {
          dispatch(
            deleteHolding({ userId: formData.userId, itemName: formData.name })
          );
        }
      } else {
        console.log("dispatchuju add");
        console.log(existingItem);
        console.log(adjustedFormItem);
        dispatch(addHolding(adjustedFormItem));
      }
      dispatch(addTransaction(adjustedFormItem));
    }
    setFormIsValid(false);
  };

  const handleBuySellChange = (
    e: React.MouseEvent<HTMLElement>,
    newBuySell: "buy" | "sell"
  ) => {
    if (newBuySell !== null) {
      /* setBuySell(newBuySell); */
      formContext?.setTransactionType(newBuySell);
    }
  };

  return (
    <StyledForm onSubmit={onSubmitHandler} ref={formRef}>
      <div className="form">
        <div className="form-data-container">
          <TransactionType
            buySell={formData.transactionType}
            handleBuySellChange={handleBuySellChange}
          />
          <CryptoSelect selected={selectedCryptoInput} value={formData.name} />
          <Input
            label=""
            input={{
              id: "Price per item",
              type: "number",
              min: 0.01,
              step: 0.01,
              onChange: handleChange,
            }}
            startAdornment="$"
            autoFocus
            name="price"
          />
          <Input
            label=""
            input={{
              id: "Amount",
              type: "number",

              min: 0.00001,
              step: 0.00001,
              onChange: handleChange,
            }}
            name="amount"
          />
          <p className={formIsValid ? "hide" : "display"}>
            You can't sell more than you hold. Your acutal holding of{" "}
            {formData.name} is {existingHolding ? existingHolding!.amount : ""}.
          </p>
          <Input
            label=""
            input={{
              id: "Date",
              type: "date",

              onChange: handleChange,
            }}
            name="date"
          />
          <div className="buttons-container">
            <Button type="submit" variant="contained">
              Add transaction
            </Button>
            <Button
              onClick={() => formContext?.setFormShown(false)}
              variant="outlined"
              color="error"
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </StyledForm>
  );
};
export default Form;
