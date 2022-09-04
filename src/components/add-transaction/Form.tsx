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
  const nameInputRef = useRef<HTMLInputElement>();
  const priceInputRef = useRef<HTMLInputElement>();
  const amountInputRef = useRef<HTMLInputElement>();
  const dateInputRef = useRef<HTMLInputElement>();

  //Inputs state data
  const [inputCrypto, setInputCrypto] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const [inputData, setInputData] = useState({
    name: "",
    price: "",
    amount: "",
    date: "",
  });

  const [buySell, setBuySell] = useState("");

  const dispatch = useDispatch();

  const historyState = useSelector((state: any) => state.history.TBD);

  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    //tady se bude vyvolavat akce ze storu podle toho, jestli je kliknuto na Buy nebo Sell
    dispatch(historyActions.increment());

    console.log(buySell);
  };

  const handleInputCryptoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log("hey");
  };

  const handleBuySellChange = (
    e: React.MouseEvent<HTMLElement>,
    newBuySell: string
  ) => {
    setBuySell(newBuySell);
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
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
          <CryptoSelect />
          <Input
            label=""
            input={{
              id: "Price per item",
              type: "text",
              value: inputPrice,
              onChange: handleInputCryptoChange,
              ref: priceInputRef,
            }}
          />
          <Input
            label=""
            input={{
              id: "Amount",
              type: "text",
              value: inputAmount,
              onChange: handleInputCryptoChange,
            }}
          />
          <Input
            label=""
            input={{
              id: "Date",
              type: "text",
              value: inputDate,
              onChange: handleInputCryptoChange,
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
