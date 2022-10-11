import styled from "styled-components";
import {
  centerItems,
  theme,
  positiveChange,
  negativeChange,
} from "../../common/theme";

export const StyledHomePage = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    font-size: 40px;
    margin: 3% 0;
  }
  a {
    text-decoration: none;
  }

  .buttons-container {
    display: flex;
    ${centerItems};
    margin-bottom: 2%;
  }

  .buttons-container > * {
    margin: 1%;
  }
  .home-dashboard {
    display: flex;
    width: 100%;
  }
`;

export const StyledDashboard = styled.div`
  width: 1110px;
  margin: 0 auto;
`;

export const DashboardWrapper = styled.div`
  width: 100%;
  background-color: white;
  ${theme.boxShadow}
  border-radius: ${theme.borderRadius};

  .positive-change {
    ${positiveChange}
    cursor:default
  }
  .negative-change {
    ${negativeChange}
    cursor:default
  }
  .coin-name,
  .coin-price {
    font-weight: bold;
    cursor: default;
  }
  .coin-ticker {
    color: grey;
    cursor: default;
  }
  .default {
    cursor: default;
  }
`;
