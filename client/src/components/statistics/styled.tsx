import styled from "styled-components";
import {
  centerItems,
  cardSize,
  theme,
  contentWidth,
  positiveChange,
  negativeChange,
} from "../../common/theme";

export const StyledStatistics = styled.div`
  margin: 2% 5% 0 7.5%;
  width: 85%;
  /*  ${contentWidth}; */
  display: flex;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;

  border: 2px solid brown;
`;

export const StyledStatisticsCard = styled.div`
  ${cardSize};
  border: 1px solid red;
  margin: 1%;
  box-shadow: ${theme.cardShadow};
  border-radius: ${theme.borderRadius};
  ${centerItems};
  font-size: 15px;
  background-color: white;

  .stats-container {
  }
  .stats-title {
    display: flex;
    h1 {
      margin-left: 5%;
      font-size: 45px;
    }
  }
  .text-container {
    margin-top: 7%;
  }
  .positive-change {
    ${positiveChange}
  }
  .negative-change {
    ${negativeChange}
  }
  .holding-headings {
    color: grey;
  }
  .holding-price {
    font-weight: bold;
  }
`;
