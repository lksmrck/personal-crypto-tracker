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
  a {
    text-decoration: none;
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
    margin-bottom: 2%;
  }

  .home-dashboard {
    display: flex;

    width: 100%;
  }
`;

export const StyledDashboardItem = styled.div`
  width: 80%;
  background-color: white;
  box-shadow: ${theme.cardShadow};
  border-radius: ${theme.borderRadius};

  .dashboard-headings-container {
    background-color: #90e1ff;
    font-weight: bold;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 30px;
    border-bottom: 2px solid grey;

    .number-heading {
      width: 5%;
      text-align: center;
    }
    .name-heading {
      width: 25%;
      padding-left: 1%;
      padding-top: 0.5%;
    }
    .price-heading {
      width: 15%;
      text-align: right;
      padding-right: 9%;
    }
    .market-cap-heading {
      width: 20%;
      text-align: right;
      padding-right: 7%;
    }
    .movement-heading {
      width: 20%;
      text-align: right;
      padding-right: 10%;
    }
    .last-update-heading {
      width: 15%;
    }
    span {
      display: inline-block;
      /*   width: 16.667%; */
    }
  }

  .data-container {
    display: flex;
    /* justify-content: space-evenly; */
    width: 100%;
    margin: 1px;
    border-bottom: 1px solid #d6dde3;
    height: 25px;
    align-items: center;
  }
  .data-container:hover {
    background-color: #dadfe3;
    cursor: pointer;
  }
  .coin-number {
    width: 5%;
    text-align: center;
    color: grey;
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
    width: 15%;
    text-align: right;
    font-weight: bold;
    /*    border: 1px solid red; */
    padding-right: 9%;
  }
  .market-cap {
    width: 20%;
    text-align: right;
    padding-right: 7%;
  }
  .coin-24h-percentage {
    text-align: right;
    width: 20%;
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
  width: 1500px;
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
  /* overflow: scroll; */
`;
