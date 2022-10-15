//Funkce pro výpočty při update holdingu (průměrná cena, držené množství atd)
import { HoldingItem, Transaction } from "../../common/modelTypes";


const updateHoldingStatistics = (holdingToBeUpdated: HoldingItem, formItem?: Transaction)   => {
  const oldTotalPrice = holdingToBeUpdated.price * holdingToBeUpdated.amount;
let updatedItem

  if (formItem!.transactionType === "buy") {
    //Průměrná nákupní cena
    const newItemTotalPrice = formItem!.price * formItem!.amount;
    const updatedAveragePrice =
      (oldTotalPrice + newItemTotalPrice) /
      (holdingToBeUpdated.amount + formItem!.amount);

    //Vrátí upravený object (holding), který se pak nahraje do mongoDB
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
