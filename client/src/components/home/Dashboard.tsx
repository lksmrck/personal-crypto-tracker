import { StyledDashboard } from "./styled";

import HomePage from "./HomePage";
import DashboardTable from "./DashboardTable";

export default function Dashboard() {
  return (
    <>
      <HomePage />
      <StyledDashboard>
        <DashboardTable />
      </StyledDashboard>
    </>
  );
}
