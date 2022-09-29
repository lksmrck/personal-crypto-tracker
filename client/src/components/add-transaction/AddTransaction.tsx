import { StyledAddTransaction } from "./styled";
import Form from "./Form";
import { useContext } from "react";
import { Button } from "@mui/material";
import FormContext from "../../state/FormContext";

export default function AddTransaction() {
  const formContext = useContext(FormContext);

  return (
    <StyledAddTransaction>
      {formContext?.formShown ? (
        <Form />
      ) : (
        <div className="button-container">
          <Button
            variant="contained"
            onClick={() => formContext?.setFormShown(true)}
          >
            Add transaction
          </Button>
        </div>
      )}
    </StyledAddTransaction>
  );
}
