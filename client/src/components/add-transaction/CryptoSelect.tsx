import React, { useState } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

type CryptoSelectProps = {
  selected: (crypto: string) => void;
  value: string;
};
const CryptoSelect: React.FC<CryptoSelectProps> = (props) => {
  const [selectedCrypto, setSelectedCrypto] = useState("");

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
          {/* Sem dát map function na API call nebo na listing crypta */}
          <MenuItem value="Bitcoin">Bitcoin</MenuItem>
          <MenuItem value="Ethereum">Ethereum</MenuItem>
          <MenuItem value="Polkadot">Cardano</MenuItem>
          <MenuItem value="Cardano">Polkadot</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CryptoSelect;
