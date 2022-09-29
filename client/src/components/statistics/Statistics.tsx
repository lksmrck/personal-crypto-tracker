import StatisticsCard from "./StatisticsCard";
import { StyledStatistics } from "./styled";

export default function Statistics() {
  return (
    <StyledStatistics>
      <StatisticsCard key={1} />
    </StyledStatistics>
  );
}
