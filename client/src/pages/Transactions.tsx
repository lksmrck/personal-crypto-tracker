import TransactionsHistory from "../components/transactions/TransactionsHistory";
import NeedToLogin from "./screens/NeedToLogin";
import { lsUserId } from "../utils/ls-userId";
import { useState, useEffect, FC } from "react";

const Transactions: FC = () => {
  const [user, setUser] = useState(lsUserId());

  useEffect(() => {
    setUser(lsUserId());
  }, []);

  return (
    <>
      {user ? (
        <>
          <TransactionsHistory />
        </>
      ) : (
        <NeedToLogin />
      )}
    </>
  );
};
export default Transactions;
