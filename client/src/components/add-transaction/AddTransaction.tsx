import { StyledAddTransaction } from "./styled";
import Form from "./Form";
import { useState } from "react";
import { Button } from "@mui/material";

export default function AddTransaction() {
  const [formShown, setFormShown] = useState(false);
  return (
    <StyledAddTransaction>
      {formShown ? (
        <Form formShown={setFormShown} />
      ) : (
        <div className="button-container">
          <Button variant="contained" onClick={() => setFormShown(true)}>
            Add transaction
          </Button>
        </div>
      )}
    </StyledAddTransaction>
  );
}
