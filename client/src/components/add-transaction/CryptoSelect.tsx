import React, { useContext, useState, useEffect } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import DashboardContext from "../../state/DashboardContext";
import { StyledCryptoName } from "./styled";
import { DashboardCryptoItem } from "../../common/modelTypes";
import { useAppSelector } from "../../state/hooks";
import FormContext from "../../state/FormContext";

type CryptoSelectProps = {
  selected: (crypto: string) => void;
  value: string;
};
const CryptoSelect: React.FC<CryptoSelectProps> = (props) => {
  const dashboardContext = useContext(DashboardContext);
  const formContext = useContext(FormContext);
  const holdings = useAppSelector((state) => state.holdings);

  const dashboardCryptoData = dashboardContext?.dashboardData;
  const [transactionType, setTransactionType] = useState(
    formContext?.transactionType
  );

  useEffect(() => {
    setTransactionType(formContext?.transactionType);
    console.log(transactionType);
  }, [formContext?.transactionType]);

  const selectCryptoHandler = (e: SelectChangeEvent<unknown>) => {
    props.selected(e.target.value as string);
  };

  return (
    <div>
      <FormControl variant="filled" size="small" className="select-crypto">
        <InputLabel id="sort-select">Select crypto:</InputLabel>
        <Select
          labelId="sort-select"
          id="sort-select"
          label="Sort by:"
          value={props.value}
          onChange={selectCryptoHandler}
          required
        >
          {/* V případě "SELL" dá možnost pouze toho krypta, které držím (a mám tedy co prodávat). Při "BUY" dá možnost nákupu z celého crypta, jehož hodnoty se stáhly z API */}
          {transactionType == "buy"
            ? dashboardCryptoData?.map((crypto: DashboardCryptoItem) => {
                return (
                  <MenuItem
                    key={crypto.name}
                    value={crypto.name}
                    sx={{ display: "flex" }}
                  >
                    <img src={crypto.imageURL} height="20px" width="20px" />
                    <StyledCryptoName>{crypto.name}</StyledCryptoName>
                  </MenuItem>
                );
              })
            : holdings.map((holding: any) => {
                const matchedCrypto = dashboardCryptoData?.find(
                  (crypto) => crypto.name === holding.name
                );
                return (
                  <MenuItem
                    key={holding.name}
                    value={holding.name}
                    sx={{ display: "flex" }}
                  >
                    <img
                      src={matchedCrypto!.imageURL}
                      height="20px"
                      width="20px"
                    />
                    <StyledCryptoName>{holding.name}</StyledCryptoName>
                  </MenuItem>
                );
              })}
        </Select>
      </FormControl>
    </div>
  );
};

export default CryptoSelect;
