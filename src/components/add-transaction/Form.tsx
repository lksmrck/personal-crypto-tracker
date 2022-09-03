import React, { useState } from "react";
import Input from "../../material UI/Input";
import { StyledForm } from "./styled";
import { Button } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CryptoSelect from "./CryptoSelect";
import { useSelector, useDispatch } from "react-redux";
import { historyActions } from "../../store/history-slice";

export default function Form() {
  const [inputText, setInputText] = useState("");
  const [buySell, setBuySell] = useState("");

  const dispatch = useDispatch();

  const historyState = useSelector((state: any) => state.history.TBD);

  const onClickHandler = () => {
    dispatch(historyActions.increment());
    console.log(historyState);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("hey");
  };

  const handleBuySellChange = (
    e: React.MouseEvent<HTMLElement>,
    newBuySell: string
  ) => {
    setBuySell(newBuySell);
  };

  return (
    <StyledForm>
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
              value: inputText,
              onChange: handleInputChange,
            }}
          />
          <Input
            label=""
            input={{
              id: "Amount",
              type: "text",
              value: inputText,
              onChange: handleInputChange,
            }}
          />
          <Input
            label=""
            input={{
              id: "Date",
              type: "text",
              value: inputText,
              onChange: handleInputChange,
            }}
          />
          <div className="buttons-container">
            <Button onClick={onClickHandler}>Add</Button>
            <Button>Back</Button>
          </div>
        </div>
      </div>
    </StyledForm>
  );
}
