import Statistics from "../components/statistics/Statistics";
import AddTransaction from "../components/add-transaction/AddTransaction";
import { useEffect, useState } from "react";
import { lsUserId } from "../utils/ls-userId";

import NeedToLogin from "./screens/NeedToLogin";

export default function Holdings() {
  const [user, setUser] = useState(lsUserId());

  useEffect(() => {
    setUser(lsUserId());
  }, []);

  return (
    <>
      {user ? (
        <>
          <AddTransaction />

          <Statistics />
        </>
      ) : (
        <NeedToLogin />
      )}
    </>
  );
}
