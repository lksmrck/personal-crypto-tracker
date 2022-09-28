import { StyledDashboard } from "./styled";
import DashboardItem from "./DashboardItem";
import HomePage from "./HomePage";

export default function Dashboard() {
  return (
    <StyledDashboard>
      <HomePage />
      <DashboardItem />
    </StyledDashboard>
  );
}
