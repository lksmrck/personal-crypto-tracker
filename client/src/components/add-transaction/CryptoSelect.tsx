import { useContext, useEffect, FC } from "react";
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
const CryptoSelect: FC<CryptoSelectProps> = (props) => {
  const { dashboardData } = useContext(DashboardContext);
  const { transactionType, setTransactionType } = useContext(FormContext);
  const holdings = useAppSelector((state) => state.holdings);

  useEffect(() => {
    setTransactionType(transactionType);
  }, [transactionType]);

  const selectCryptoHandler = (e: SelectChangeEvent<unknown>): void => {
    props.selected(e.target.value as string);
  };

  return (
    <div>
      <FormControl variant="filled" size="small" className="select-crypto">
        <InputLabel
          id="crypto-select"
          sx={{ "&.Mui-focused": { color: "#6c1c6a" } }}
        >
          Select crypto:
        </InputLabel>
        <Select
          labelId="crypto-select"
          id="crypto-select"
          label="crypto-select"
          value={props.value}
          onChange={selectCryptoHandler}
          required
          variant="filled"
          sx={{
            "&:before": {
              borderColor: "#6c1c6a",
            },
            "&:after": {
              borderColor: "#6c1c6a",
            },
          }}
        >
          {/* In case of "SELL", only crypto, which is already held can be sold. In case of "BUY" - every crypto fetched from API can be bought. */}
          {transactionType == "buy"
            ? dashboardData?.map((crypto: DashboardCryptoItem) => {
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
                const matchedCrypto = dashboardData?.find(
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
