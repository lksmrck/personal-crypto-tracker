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

  h1 {
    font-size: 70px;
    margin-top: 1%;
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
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
`;

export const DashboardWrapper = styled.div`
  width: 80%;
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
