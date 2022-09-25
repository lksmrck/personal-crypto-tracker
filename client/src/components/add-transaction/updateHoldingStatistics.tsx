//Funkce pro výpočty při update holdingu (průměrná cena, držené množství atd)

const updateHoldingStatistics = (holdingToBeUpdated: any, formItem?: any) => {
  const oldTotalPrice = holdingToBeUpdated.price * holdingToBeUpdated.amount;

  if (formItem.transactionType === "buy") {
    //Průměrná nákupní cena
    const newItemTotalPrice = formItem.price * formItem.amount;
    const updatedAveragePrice =
      (oldTotalPrice + newItemTotalPrice) /
      (holdingToBeUpdated.amount + formItem.amount);

    //Vrátí upravený object (holding), který se pak nahraje do mongoDB
    return {
      ...formItem,
      price: updatedAveragePrice,
      amount: holdingToBeUpdated.amount + formItem.amount,
    };
  } else if (formItem.transactionType === "sell") {
    return {
      ...formItem,
      price: holdingToBeUpdated.price,
      amount: holdingToBeUpdated.amount - formItem.amount,
    };
  }
};

export default updateHoldingStatistics;
