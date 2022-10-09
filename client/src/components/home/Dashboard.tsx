import { StyledDashboard } from "./styled";

import HomePage from "./HomePage";
import DashboardTable from "./DashboardTable";
import { useContext, useState, useEffect } from "react";
import DashboardContext from "../../state/DashboardContext";
import LoadingSpinner from "../layout/LoadingSpinner";

const Dashboard = () => {
  const context = useContext(DashboardContext);
  const [isLoading, setIsLoading] = useState(context?.isLoading);

  useEffect(() => {
    setIsLoading(context?.isLoading);
    console.log(context?.isLoading);
  }, [context?.isLoading]);

  return (
    <div>
      <HomePage />
      <StyledDashboard>
        {/* {context?.isLoading ? <LoadingSpinner /> : <DashboardTable />} */}
        <DashboardTable />
      </StyledDashboard>
    </div>
  );
};

export default Dashboard;
