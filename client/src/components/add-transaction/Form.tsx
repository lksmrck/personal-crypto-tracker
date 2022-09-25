import React, { useState, useRef } from "react";
import Input from "../Input";
import { StyledForm } from "./styled";
import { Button } from "@mui/material";

import CryptoSelect from "./CryptoSelect";
/* import { useSelector, useDispatch } from "react-redux"; */
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { addHolding, updateHolding } from "../../state/actions/statistics";
import { addTransaction } from "../../state/actions/transactions";
import TransactionType from "./TransactionType";

/* import { CryptoItem } from "../../common/modelTypes"; */
import { RootState } from "../..";
import updateHoldingStatistics from "./updateHoldingStatistics";

export default function Form() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [inputName, setInputName] = useState<string>("");
  const priceInputRef = useRef<any>(null);
  const amountInputRef = useRef<any>(null);
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const [buySell, setBuySell] = useState<"buy" | "sell">("buy");

  const dispatch = useAppDispatch();
  const holdings = useAppSelector((state: RootState) => state.statistics); //Dle slices, které jsem dal do store (index.tsx)
  const transactions = useAppSelector((state: RootState) => state.transactions); //Dle slices, které jsem dal do store (index.tsx)

  const [transactionNumber, setTransactionNumber] = useState<number>(
    transactions.length + 1
  );

  const selectedCryptoInput = (crypto: string) => {
    setInputName(crypto);
  };

  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    //Číslo transakce. Začíná od 1
    setTransactionNumber((prevNumber) => prevNumber + 1);

    //Sesbírání infa o transakci. Pak se pošle do statistics-slice a history-slice. Do každého slice jiné údaje.
    const formItem = {
      transactionType: buySell,
      transactionNumber: transactionNumber,
      id: Math.random().toString(),
      name: inputName,
      price: parseInt(priceInputRef.current?.value),
      amount: parseInt(amountInputRef.current?.value),
      date: dateInputRef.current?.value,
    };

    //Clearing inputs
    if (formRef.current !== null) {
      formRef.current.reset();
    }
    setInputName("");

    //Sleduju, jestli položka už v array existuje.
    const existingItem = holdings.find(
      (holding: { name: string }) => holding.name === formItem.name
    );

    console.log(existingItem);

    //Forma itemu, který se posílá do holdings reduceru
    const newHoldingItem = {
      id: formItem.id,
      name: formItem.name,
      price: formItem.price,
      amount: formItem.amount,
      date: formItem.date,
    };

    //Forma itemu, který se posílá do transactions reduceru
    const newTransactionItem = {
      transactionType: formItem.transactionType,
      id: formItem.id,
      name: formItem.name,
      price: formItem.price,
      amount: formItem.amount,
      date: formItem.date,
    };

    //Výpočty - Průměrná nákupní cena, celkový holding

    /*  console.log(updatedHolding);
    console.log(existingItem); */
    //Pokud položka už existuje, posílám do reduceru updateExistingHolding. Pokud je to první položka, posílám do addNewHolding
    if (existingItem !== undefined) {
      const updatedHolding = updateHoldingStatistics(existingItem, formItem);
      dispatch(updateHolding(formItem.name, updatedHolding));
    } else dispatch(addHolding(newHoldingItem));
    dispatch(addTransaction(newTransactionItem));
  };

  const handleBuySellChange = (
    e: React.MouseEvent<HTMLElement>,
    newBuySell: "buy" | "sell"
  ) => {
    if (newBuySell !== null) {
      setBuySell(newBuySell);
    }
  };

  const onClickBackHandler = () => {
    console.log(buySell);
  };

  return (
    <StyledForm onSubmit={onSubmitHandler} ref={formRef}>
      <div className="form">
        <div>
          <TransactionType
            buySell={buySell}
            handleBuySellChange={handleBuySellChange}
          />
          <CryptoSelect selected={selectedCryptoInput} value={inputName} />
          <Input
            label=""
            input={{
              id: "Price per item",
              type: "number",
              ref: priceInputRef,
              min: 0.001,
            }}
            startAdornment="$"
          />
          <Input
            label=""
            input={{
              id: "Amount",
              type: "number",
              ref: amountInputRef,
              min: 0.00001,
            }}
          />
          <Input
            label=""
            input={{
              id: "Date",
              type: "date",
              ref: dateInputRef,
            }}
          />
          <div className="buttons-container">
            <Button type="submit">Add transaction</Button>
            <Button onClick={onClickBackHandler}>Back</Button>
          </div>
        </div>
      </div>
    </StyledForm>
  );
}
