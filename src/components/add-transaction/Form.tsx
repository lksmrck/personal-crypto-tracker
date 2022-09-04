import React, { useState, useRef } from "react";
import Input from "../../material UI/Input";
import { StyledForm } from "./styled";
import { Button } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CryptoSelect from "./CryptoSelect";
import { useSelector, useDispatch } from "react-redux";
import { historyActions } from "../../store/history-slice";

export default function Form() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [inputName, setInputName] = useState<string>("");
  const priceInputRef = useRef<HTMLInputElement | null>(null);
  const amountInputRef = useRef<HTMLInputElement | null>(null);
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const [buySell, setBuySell] = useState("");

  const dispatch = useDispatch();

  const onSelectCryptoChange = () => {};

  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const formItem = {
      name: inputName,
      price: priceInputRef.current?.value,
      amount: amountInputRef.current?.value,
      date: dateInputRef.current?.value,
    };
    console.log(formItem);

    //Clearing inputs
    if (formRef.current !== null) {
      formRef.current.reset();
    }
    setInputName("");

    //tady se bude vyvolavat akce ze storu podle toho, jestli je kliknuto na Buy nebo Sell
    dispatch(historyActions.increment());
  };

  const selectedCryptoInput = (crypto: string) => {
    setInputName(crypto);
  };

  const handleBuySellChange = (
    e: React.MouseEvent<HTMLElement>,
    newBuySell: string
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
              type: "text",
              ref: priceInputRef,
            }}
          />
          <Input
            label=""
            input={{
              id: "Amount",
              type: "text",
              ref: amountInputRef,
            }}
          />
          <Input
            label=""
            input={{
              id: "Date",
              type: "text",
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
