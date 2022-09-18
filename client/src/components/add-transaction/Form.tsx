import React, { useState, useRef } from "react";
import Input from "../../material UI/Input";
import { StyledForm } from "./styled";
import { Button } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CryptoSelect from "./CryptoSelect";
import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { addHolding, updateHolding } from "../../state/actions/statistics";

import { CryptoItem } from "../../common/modelTypes";
import { RootState } from "../..";

export default function Form() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [inputName, setInputName] = useState<string>("");
  const priceInputRef = useRef<any>(null);
  const amountInputRef = useRef<any>(null);
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const [buySell, setBuySell] = useState("");

  const dispatch = useAppDispatch();
  const holdings = useAppSelector((state: RootState) => state.statistics); //Dle slices, které jsem dal do store (index.tsx)
  const transactions = useAppSelector(
    (state: RootState) => state.transactions.transactions
  ); //Dle slices, které jsem dal do store (index.tsx)

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
    console.log(formItem);
    console.log(holdings);
    //Clearing inputs
    if (formRef.current !== null) {
      formRef.current.reset();
    }
    setInputName("");

    //Sleduju, jestli položka už v array existuje.
    const existingItem = holdings.find(
      (holding: { name: string }) => holding.name === formItem.name
    );

    const newHoldingItem = {
      id: formItem.id,
      name: formItem.name,
      price: formItem.price,
      amount: formItem.amount,
      date: formItem.date,
    };

    //Pokud položka už existuje, posílám do reduceru updateExistingHolding. Pokud je to první položka, posílám do addNewHolding
    if (existingItem) {
      dispatch(updateHolding(formItem, formItem.name));
    } else dispatch(addHolding(newHoldingItem));
    /*  dispatch(historyActions.increment()); */
    console.log(holdings);
  };

  const handleBuySellChange = (
    e: React.MouseEvent<HTMLElement>,
    newBuySell: "buy" | "sell"
  ) => {
    setBuySell(newBuySell);
  };

  return (
    <StyledForm onSubmit={onSubmitHandler} ref={formRef}>
      <div className="form">
        <div>
          <ToggleButtonGroup
            value={buySell}
            exclusive
            onChange={handleBuySellChange}
          >
            <ToggleButton sx={{ color: "green", borderRadius: 2 }} value="buy">
              Buy
            </ToggleButton>
            <ToggleButton sx={{ color: "red", borderRadius: 2 }} value="sell">
              Sell
            </ToggleButton>
          </ToggleButtonGroup>
          <CryptoSelect selected={selectedCryptoInput} value={inputName} />
          <Input
            label=""
            input={{
              id: "Price per item",
              type: "number",
              ref: priceInputRef,
            }}
          />
          <Input
            label=""
            input={{
              id: "Amount",
              type: "number",
              ref: amountInputRef,
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
            <Button>Back</Button>
          </div>
        </div>
      </div>
    </StyledForm>
  );
}
