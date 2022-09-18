import Form from "../components/add-transaction/Form";
import Navbar from "../layout/Navbar";
import Statistics from "../components/statistics/Statistics";
import TransactionHistory from "../components/transaction-history/TransactionHistory";
import HomePage from "../components/home/HomePage";

export default function MainPage() {
  return (
    <div>
      <Navbar />
      {/*    <HomePage /> */}
      <Form />
      <Statistics />
      {/*  <TransactionHistory /> */}
    </div>
  );
}
