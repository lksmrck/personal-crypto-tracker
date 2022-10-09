import { StyledStatistics } from "./styled";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { RootState } from "../..";
import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import FormContext from "../../state/FormContext";
import { StyledWrapper } from "./styled";
import { lsUserId } from "../../utils/ls-userId";
import { getHoldings } from "../../state/actions/statistics";
import DashboardContext from "../../state/DashboardContext";
import HoldingCard from "./HoldingCard";
import LoadingSpinner from "../layout/LoadingSpinner";

const ActualHoldings = () => {
  const holdings = useAppSelector((state: RootState) => state.statistics);
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
  };

  useEffect(
    () => {
      dashboardContext?.getDashboardData();
      dispatch(getHoldings(userId));
    },
    [
      /* dispatch */
    ]
  );

  return (
    <>
      {loadingState.loading ? (
        <LoadingSpinner />
      ) : holdings.length > 0 ? (
        <StyledStatistics>
          <HoldingCard />
        </StyledStatistics>
      ) : (
        !formContext?.formShown && (
          <StyledWrapper>
            <div className="no-holdings-found">
              <h1>No holdings found. Please add one.</h1>
              <Button variant="contained" onClick={onClickButton}>
                Add transaction
              </Button>
            </div>
          </StyledWrapper>
        )
      )}

      {/*  {holdings.length > 0 ? (
        <StyledStatistics>
          {loadingState.loading ? <LoadingSpinner /> : <HoldingCard />}
        </StyledStatistics>
      ) : ""} */}
    </>
  );
};
export default ActualHoldings;
