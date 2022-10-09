import TransactionsHistory from "../components/transactions/TransactionsHistory";
import NeedToLogin from "./screens/NeedToLogin";
import { lsUserId } from "../utils/ls-userId";
import { useState, useEffect } from "react";

const Transactions: React.FC = () => {
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
