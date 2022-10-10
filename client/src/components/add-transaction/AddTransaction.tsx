import { StyledAddTransaction } from "./styled";
import Form from "./Form";
import { useContext } from "react";
import { Button } from "@mui/material";
import FormContext from "../../state/FormContext";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../..";

const AddTransaction: React.FC = () => {
  const formContext = useContext(FormContext);
  const holdings = useAppSelector((state: RootState) => state.holdings);

  return (
    <StyledAddTransaction>
      {formContext?.formShown ? (
        <Form />
      ) : (
        holdings.length > 0 && (
          <div className="button-container">
            <Button
              variant="contained"
              onClick={() => {
                formContext?.setFormShown(true);
                formContext?.setTransactionType("buy");
              }}
            >
              Add transaction
            </Button>
          </div>
        )
      )}
    </StyledAddTransaction>
  );
};
export default AddTransaction;
