import styled from "styled-components";
import {
  centerItems,
  cardSize,
  theme,
  contentWidth,
  positiveChange,
  negativeChange,
} from "../../common/theme";

export const StyledTestStats = styled.div`
  /* border: 3px solid purple; */
  .positive-change {
    ${positiveChange}
    font-size: 15px;
    font-weight: bold;
  }
  .negative-change {
    ${negativeChange}
    font-size: 15px;
    font-weight: bold;
  }

  .titles-container {
    margin-top: 3%;
    margin-left: 15%;
  }
  .data-container {
    text-align: right;
    margin-top: 3%;
    margin-right: 15%;
  }
  .card-paper {
    ${theme.boxShadow} /*  margin: 0.5% */
    font-size: 14px
  }
  .card-header-container {
    display: flex;
    align-items: center;
    /*    border: 1px solid red; */
    justify-content: space-between;
  }

  .card-header-logo-name-container {
    ${centerItems}
    margin: 4%
  }
  .card-header-price-container {
    display: flex;
    justify-content: center;
    /*  align-items: center; */
    align-items: flex-end;
    margin-right: 4%;

    /*  border: 1px solid red; */
  }
  .price {
    font-size: 20px;
  }
  .card-buttons-container {
    ${centerItems}
  }
  .PL {
    font-size: 15px;
    font-weight: bold;
  }
`;

export const StyledStatistics = styled.div`
  margin-top: 2%;
  width: 100%;

  .no-holdings-found {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 10%;
    border: 1px solid red;
  }
`;

export const StyledStatisticsCard = styled.div`
  ${cardSize};
  /*  border: 1px solid red; */
  margin: 1%;

  border-radius: ${theme.borderRadius};
  ${centerItems};
  font-size: 15px;
  background-color: white;
  ${theme.boxShadow}
  border: 2px solid green;

  .stats-container {
    border: 1px solid red;
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

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  .no-holdings-found {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 12%;
    button {
      margin: 2%;
    }
  }
`;
