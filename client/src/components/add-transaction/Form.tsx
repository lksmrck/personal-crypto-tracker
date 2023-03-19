import React, { useState, useRef, useEffect, useContext, FC } from "react";
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

const Form: FC = () => {
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

  const { getDashboardData } = useContext(DashboardContext);
  const {
    selectedCrypto,
    transactionType,
    setSelectedCrypto,
    setFormShown,
    setTransactionType,
  } = useContext(FormContext);

  useEffect(() => {
    getDashboardData();
    setFormData({ ...formData, userId });
  }, []);

  useEffect(() => {
    setFormData({
      ...formData,
      name: selectedCrypto!,
      transactionType: transactionType!,
    });

    const existingItem = holdings.find(
      (holding: HoldingItem) => holding.name === selectedCrypto!
    );
    setExistingHolding(existingItem);
  }, [selectedCrypto, transactionType]);

  const selectedCryptoInput = (crypto: string): void => {
    setFormIsValid(true);
    setSelectedCrypto(crypto);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

    //Validation that amount being sold is not higher than held amount.
    if (
      (formData.transactionType === "sell" &&
        existingItem.amount >= parseInt(formData.amount)) ||
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

      setFormShown(false);

      if (existingItem !== undefined) {
        const updatedHolding = updateHoldingStatistics(
          existingItem,
          adjustedFormItem
        );
        //If amount of updated holding != 0, updateHolding is dispatched. If =0, deleteHolding is dispatched.
        if (updatedHolding!.amount !== 0) {
          console.log(updatedHolding);
          dispatch(
            updateHolding(adjustedFormItem.name, updatedHolding as HoldingItem)
          );
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
  ): void => {
    if (newBuySell !== null) setTransactionType(newBuySell);
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
            {formData.name} is {existingHolding?.amount}.
          </p>
          <FormInput
            input={{
              id: "Date of transaction",
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
            <MyButton
              variant="contained"
              text="Back"
              onClick={() => setFormShown(false)}
              red
            />
          </div>
        </div>
      </div>
    </StyledForm>
  );
};
export default Form;
