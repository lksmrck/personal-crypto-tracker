import { StyledAddTransaction } from "./styled";
import Form from "./Form";
import { useContext, FC } from "react";
import FormContext from "../../state/FormContext";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../..";
import MyButton from "../layout/MyButton";

const AddTransaction: FC = () => {
  const { formShown, setFormShown, setTransactionType } =
    useContext(FormContext);
  const holdings = useAppSelector((state: RootState) => state.holdings);

  return (
    <StyledAddTransaction>
      {formShown ? (
        <Form />
      ) : (
        holdings.length > 0 && (
          <div className="button-container">
            <MyButton
              variant="contained"
              onClick={() => {
                setFormShown(true);
                setTransactionType("buy");
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
