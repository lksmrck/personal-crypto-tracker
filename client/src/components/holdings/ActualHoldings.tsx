import { StyledHoldings } from "./styled";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { RootState } from "../..";
import { useContext, useEffect } from "react";
import FormContext from "../../state/FormContext";
import { StyledWrapper } from "./styled";
import { lsUserId } from "../../utils/ls-userId";
import { getHoldings } from "../../state/actions/holdings";
import DashboardContext from "../../state/DashboardContext";
import HoldingCard from "./HoldingCard";
import LoadingSpinner from "../layout/LoadingSpinner";
import MyButton from "../layout/MyButton";

const ActualHoldings: React.FC = () => {
  const holdings = useAppSelector((state: RootState) => state.holdings);
  const loadingState = useAppSelector(
    (state: RootState) => state.errorAndLoading
  );
  const dispatch = useAppDispatch();
  const formContext = useContext(FormContext);
  const dashboardContext = useContext(DashboardContext);
  const userId = lsUserId();

  const onClickButton = () => {
    formContext?.setFormShown(true);
    formContext?.setSelectedCrypto("Bitcoin");
    formContext?.setTransactionType("buy");
  };

  useEffect(() => {
    dashboardContext?.getDashboardData();
    dispatch(getHoldings(userId));
  }, []);

  return (
    <div>
      <StyledHoldings>
        {loadingState.loading ? (
          <LoadingSpinner />
        ) : holdings.length > 0 ? (
          <HoldingCard />
        ) : (
          !formContext?.formShown && (
            <StyledWrapper>
              <div className="no-holdings-found">
                <h1>No holdings found. Please add one.</h1>
                <MyButton
                  text="Add transaction"
                  onClick={onClickButton}
                  variant="contained"
                  purple
                />
              </div>
            </StyledWrapper>
          )
        )}
      </StyledHoldings>
    </div>
  );
};
export default ActualHoldings;
