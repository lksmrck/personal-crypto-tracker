import React, { useState, useContext } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import DashboardContext from "../../state/DashboardContext";
import { firstLetterCapitalized } from "../../utils/text-format";

type CryptoSelectProps = {
  selected: (crypto: string) => void;
  value: string;
};
const CryptoSelect: React.FC<CryptoSelectProps> = (props) => {
  const context = useContext(DashboardContext);
  const dashboardCryptoData = context?.dashboardData;
  /* const [selectedCrypto, setSelectedCrypto] = useState(""); */

  const selectCryptoHandler = (e: SelectChangeEvent<unknown>) => {
    props.selected(e.target.value as string);
  };

  return (
    <div className="select-crypto">
      <FormControl
        variant="filled"
        sx={{ minWidth: 120, backgroundColor: "white" }}
        size="small"
      >
        <InputLabel id="sort-select">Select crypto:</InputLabel>
        <Select
          labelId="sort-select"
          id="sort-select"
          label="Sort by:"
          value={props.value}
          onChange={selectCryptoHandler}
        >
          {/* Items v selectu se mapují z dat, které se stáhnout z API */}
          {dashboardCryptoData.map((crypto: any) => {
            return (
              <MenuItem value={crypto.name}>
                {firstLetterCapitalized(crypto.name)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default CryptoSelect;
