import styled from "styled-components";
import { centerItems, cardSize, theme } from "../../common/theme";

export const StyledStatistics = styled.div`
  margin: 2% 2% 0 2%;
  width: 96%;
  display: flex;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;

  border: 2px solid brown;
`;

export const StyledStatisticsCard = styled.div`
  ${centerItems};
  ${cardSize};
  border: 1px solid red;
  margin: 1%;
  box-shadow: ${theme.cardShadow};
  border-radius: ${theme.borderRadius};
`;
