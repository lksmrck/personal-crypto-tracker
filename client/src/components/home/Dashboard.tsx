import { StyledDashboard } from "./styled";
import DashboardItem from "./DashboardItem";
import HomePage from "./HomePage";
import DashboardMUI from "./DashboardMUI";

export default function Dashboard() {
  return (
    <>
      <HomePage />
      <StyledDashboard>
        {/*   <DashboardItem /> */}
        <DashboardMUI />
      </StyledDashboard>
    </>
  );
}
