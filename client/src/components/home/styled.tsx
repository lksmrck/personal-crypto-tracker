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
  }
  .home-container {
  }
  .home-hav {
  }
  .buttons-container {
    display: flex;
    ${centerItems}
    button {
      margin: 2%;
    }
  }

  .home-dashboard {
    display: flex;

    width: 100%;
    /*  border: 2px solid red; */

    /* border: 1px solid black; */
  }
`;

export const StyledDashboardItem = styled.div`
  width: 100%;
  background-color: white;
  .dashboard-headings-container {
    background-color: antiquewhite;
    font-weight: bold;
    width: 100%;
    height: 30px;
    border-bottom: 2px solid grey;

    span {
      display: inline-block;
      width: 25%;
    }
  }
  span {
    display: inline-block;
    /* width: 20%; */
  }
  .data-container {
    display: flex;
    /* justify-content: space-evenly; */
    width: 100%;
    margin: 1px;
    border-bottom: 1px solid #d6dde3;
    height: 25px;
  }
  .coin-name-container {
    display: flex;
    width: 25%;
    padding-left: 1%;
  }
  .coin-name {
    font-weight: bold;
    padding-right: 1.5%;
    padding-left: 4%;
  }
  .coin-ticker {
    color: grey;
    /* font-size: 14px; */
  }
  .coin-price {
    width: 25%;
    text-align: right;
    font-weight: bold;
    /*    border: 1px solid red; */
    padding-right: 9%;
  }
  .market-cap {
    width: 25%;
    text-align: right;
    padding-right: 7%;
  }
  .coin-24h-percentage {
    text-align: right;
    width: 25%;
    padding-right: 10%;
  }
  .price-heading {
    text-align: right;
    padding-right: 9%;
  }
  .market-cap-heading {
    text-align: right;
    padding-right: 7%;
  }
  .name-heading {
    padding-left: 1%;
    padding-top: 0.5%;
  }
  .movement-heading {
    text-align: right;
    padding-right: 10%;
  }
  .positive-change {
    ${positiveChange}
  }
  .negative-change {
    ${negativeChange}
  }
`;
export const StyledDashboard = styled.div`
  width: 100%;
  box-shadow: ${theme.cardShadow};
  border-radius: ${theme.borderRadius};
`;
