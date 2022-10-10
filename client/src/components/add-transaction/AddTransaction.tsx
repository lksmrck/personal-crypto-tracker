import { StyledAddTransaction } from "./styled";
import Form from "./Form";
import { useContext } from "react";
import FormContext from "../../state/FormContext";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../..";
import MyButton from "../layout/MyButton";

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
            <MyButton
              variant="contained"
              onClick={() => {
                formContext?.setFormShown(true);
                formContext?.setTransactionType("buy");
              }}
              text="Add transaction"
              purple
            />
          </div>
        )
      )}
    </StyledAddTransaction>
  );
};
export default AddTransaction;
