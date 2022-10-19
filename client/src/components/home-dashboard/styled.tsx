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
  .home-container {
    width: 1110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .header-container {
    ${centerItems}
  }
  h2 {
    font-size: 40px;
    margin: 1% 0;
    @media only screen and (max-width: 535px) {
      font-size: 25px;
    }
  }
  a {
    text-decoration: none;
  }

  .buttons-container {
    display: flex;
    ${centerItems};
    margin-bottom: 1%;
  }

  .buttons-container > * {
    margin: 1%;
  }
`;

export const StyledDashboard = styled.div`
  width: 1110px;
  max-width: 100vw;
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
