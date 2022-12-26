import { StyledDashboard } from "./styled";

import HomePage from "./HomePage";
import DashboardTable from "./DashboardTable";
import { useContext, useEffect, FC } from "react";
import DashboardContext from "../../state/DashboardContext";
import LoadingSpinner from "../layout/LoadingSpinner";

const Dashboard: FC = () => {
  const { isLoading, getDashboardData } = useContext(DashboardContext);

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div>
      <HomePage />
      <StyledDashboard>
        {isLoading ? <LoadingSpinner /> : <DashboardTable />}
      </StyledDashboard>
    </div>
  );
};

export default Dashboard;
