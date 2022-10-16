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
    setFormIsValid(true);
    formContext?.setSelectedCrypto(crypto);
    /* setFormData({ ...formData, name: crypto }); */
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Když vyskočí hláška s invalid state, po update inputů zmizí.
    if (!formIsValid) {
      setFormIsValid(true);
    }
    //Input name = initial state object properties
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    //Existing item - aby se pak níže poslal do update nebo delete.
    /* const existingItem = holdings.find(
      (holding: HoldingItem) => holding.name === formData.name
    ); */
    const existingItem = existingHolding as HoldingItem;

    //Validace, že nedavam transakci, kdy prodam vic nez aktualne drzim v Holdings - pak se prirazuje formIsValid state.
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

      formContext?.setFormShown(false);

      //Pokud dané krypto už aktuálně držím, proženu transakci přes updateHoldingStatistics funkci, kde se vypočítá nový holding objects vč. průměrné nák. ceny. Ten se potom pošle do reduceru
      if (existingItem !== undefined) {
        const updatedHolding = updateHoldingStatistics(
          existingItem,
          adjustedFormItem
        );
        //Pokud amount updatovaného holdingu se nerovná 0, tak dispatchuju updateHolding. Pokud se rovná 0 tak dispatchuju deleteHolding a holding se smaže z dtbs.
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
  ) => {
    formContext?.setTransactionType(newBuySell);
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
              onClick={() => formContext?.setFormShown(false)}
              red
            />
          </div>
        </div>
      </div>
    </StyledForm>
  );
};
export default Form;
