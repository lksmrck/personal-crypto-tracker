import { StyledDashboard } from "./styled";

import HomePage from "./HomePage";
import DashboardTable from "./DashboardTable";
import { useContext, useEffect } from "react";
import DashboardContext from "../../state/DashboardContext";
import LoadingSpinner from "../layout/LoadingSpinner";

const Dashboard: React.FC = () => {
  const dashboardContext = useContext(DashboardContext);

  useEffect(() => {
    dashboardContext?.getDashboardData();
  }, []);

  return (
    <div>
      <HomePage />
      <StyledDashboard>
        {dashboardContext?.isLoading ? <LoadingSpinner /> : <DashboardTable />}
      </StyledDashboard>
    </div>
  );
};

export default Dashboard;
