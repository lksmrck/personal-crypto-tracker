export const firstLetterCapitalized = (str: string): string => {
    const result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
  };


  /* const DUMMY_DATA = [
  {
    ticker: "BTC",
    name: "Bitcoin",
    price: "22,000 USD",
    dayMovement: "7%",
    marketCap: "381000000",
  },
  {
    ticker: "ETH",
    name: "Ethereum",
    price: "1,580 USD",
    dayMovement: "-2%",
    marketCap: "193000000",
  },
  {
    ticker: "USDT",
    name: "Tether",
    price: "1 USD",
    dayMovement: "0%",
    marketCap: "67000000",
  },
  {
    ticker: "SOL",
    name: "Solana",
    price: "33.28 USD",
    dayMovement: "12%",
    marketCap: "11000000",
  },
]; */