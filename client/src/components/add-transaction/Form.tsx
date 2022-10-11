import React, { useState, useRef, useEffect, useContext } from "react";
import FormInput from "./FormInput";
import { StyledForm } from "./styled";
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
import MyButton from "../layout/MyButton";

/* const userId = lsUserId(); */

const initialState = {
  transactionType: "buy",
  userId: "",
  name: "",
  price: "",
  amount: "",
  date: "",
};

const Form: React.FC = () => {
  const userId = lsUserId();

  const initialState = {
    transactionType: "buy",
    userId,
    name: "",
    price: "",
    amount: "",
    date: "",
  };

  const [formData, setFormData] = useState(initialState);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [existingHolding, setExistingHolding] = useState<HoldingItem>();

  const [formIsValid, setFormIsValid] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const holdings = useAppSelector((state: RootState) => state.holdings);

  const context = useContext(DashboardContext);

  const formContext = useContext(FormContext);

  useEffect(() => {
    context?.getDashboardData();
    setFormData({ ...formData, userId });
  }, []);

  useEffect(() => {
    setFormData({
      ...formData,
      name: formContext?.selectedCrypto!,
      transactionType: formContext?.transactionType!,
    });
    //Aby se pak zobrazilo v případě špatně zadaného množství - viz. DOM
    const existingItem = holdings.find(
      (holding: HoldingItem) => holding.name === formContext?.selectedCrypto!
    );
    setExistingHolding(existingItem);
  }, [formContext?.selectedCrypto, formContext?.transactionType]);

  const selectedCryptoInput = (crypto: string) => {
    setFormData({ ...formData, name: crypto });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formIsValid) {
      setFormIsValid(true);
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    //Existing item - aby se pak níže poslal do update nebo delete.
    const existingItem = holdings.find(
      (holding: HoldingItem) => holding.name === formData.name
    );

    //Validace, že nedavam transakci, kdy prodam vic nez aktualne drzim v Holdings - pak se prirazuje formIsValid state.
    if (
      (formData.transactionType === "sell" &&
        existingItem.amount >= formData.amount) ||
      formData.transactionType === "buy"
    ) {
      setFormIsValid(true);

      const adjustedFormItem = {
        ...formData,
        price: parseInt(formData.price),
        amount: parseInt(formData.amount),
      };

      //Clearing inputs
      if (formRef.current !== null) {
        formRef.current.reset();
      }

      formContext?.setFormShown(false);

      if (existingItem !== undefined) {
        const updatedHolding = updateHoldingStatistics(
          existingItem,
          adjustedFormItem
        );
        if (updatedHolding.amount != 0) {
          dispatch(updateHolding(adjustedFormItem.name, updatedHolding));
        } else {
          dispatch(
            deleteHolding({ userId: formData.userId, itemName: formData.name })
          );
        }
      } else {
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
          <FormInput
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
          <FormInput
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
          <FormInput
            input={{
              id: "Date",
              type: "date",
              onChange: handleChange,
            }}
            name="date"
          />
          <div className="buttons-container">
            <MyButton
              type="submit"
              variant="contained"
              text="Add transaction"
              purple
            />
            {/*   <Button type="submit" variant="contained">
              Add transaction
            </Button> */}
            <MyButton
              variant="contained"
              text="Back"
              onClick={() => formContext?.setFormShown(false)}
              red
            />
            {/*  <Button
              onClick={() => formContext?.setFormShown(false)}
              variant="outlined"
              color="error"
            >
              Back
            </Button> */}
          </div>
        </div>
      </div>
    </StyledForm>
  );
};
export default Form;
