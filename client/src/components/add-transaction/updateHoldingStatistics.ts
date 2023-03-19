//Function used for calculations during the holding update (average price, holding amount etc.)

import { HoldingItem, Transaction } from "../../common/modelTypes";


const updateHoldingStatistics = (holdingToBeUpdated: HoldingItem, formItem?: Transaction) => {
  const oldTotalPrice = holdingToBeUpdated.price * holdingToBeUpdated.amount;


  if (formItem!.transactionType === "buy") {
    //Average buy price
    const newItemTotalPrice = formItem!.price * formItem!.amount;
    const updatedAveragePrice =
      (oldTotalPrice + newItemTotalPrice) /
      (holdingToBeUpdated.amount + formItem!.amount);

   return  {
      ...formItem,
      price: updatedAveragePrice,
      amount: holdingToBeUpdated.amount + formItem!.amount,
      date: formItem!.date
    };
  } else if (formItem!.transactionType === "sell") {
    return {
      ...formItem,
      price: holdingToBeUpdated.price,
      amount: holdingToBeUpdated.amount - formItem!.amount,
      date: formItem!.date
    };
  }
  
};

export default updateHoldingStatistics;
