//Funkce pro výpočty při update holdingu (průměrná cena, držené množství atd)
import { HoldingItem, Transaction } from "../../common/modelTypes";

interface UpdatedHolding {



}

const updateHoldingStatistics = (holdingToBeUpdated: HoldingItem, formItem?: Transaction): HoldingItem | undefined  => {
  const oldTotalPrice = holdingToBeUpdated.price * holdingToBeUpdated.amount;
let updatedItem

  if (formItem!.transactionType === "buy") {
    //Průměrná nákupní cena
    const newItemTotalPrice = formItem!.price * formItem!.amount;
    const updatedAveragePrice =
      (oldTotalPrice + newItemTotalPrice) /
      (holdingToBeUpdated.amount + formItem!.amount);

    //Vrátí upravený object (holding), který se pak nahraje do mongoDB
    updatedItem =  {
      ...holdingToBeUpdated,
      price: updatedAveragePrice,
      amount: holdingToBeUpdated.amount + formItem!.amount,
      date: formItem!.date
    };
  } else if (formItem!.transactionType === "sell") {
    updatedItem = {
      ...holdingToBeUpdated,
      price: holdingToBeUpdated.price,
      amount: holdingToBeUpdated.amount - formItem!.amount,
      date: formItem!.date
    };
  }
  return updatedItem
};

export default updateHoldingStatistics;
