import TransactionHistory from "../components/transaction-history/TransactionHistory";
import NeedToLogin from "./screens/NeedToLogin";
import { lsUserId } from "../utils/ls-userId";
import { useState, useEffect } from "react";

export default function Transactions() {
  const [user, setUser] = useState(lsUserId());

  useEffect(() => {
    setUser(lsUserId());
  }, []);

  return (
    <>
      {user ? (
        <>
          <TransactionHistory />
        </>
      ) : (
        <NeedToLogin />
      )}
    </>
  );
}
