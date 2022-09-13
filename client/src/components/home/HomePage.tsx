import React from "react";
import { StyledHomePage } from "./styled";

export default function HomePage() {
  return (
    <StyledHomePage>
      <div className="homepage-container">
        <h1>Welcome to Crypto Tracker.</h1>
        <p>Add Transaction</p>
        <p>Statistics</p>
        <p>Transaction history</p>
      </div>
    </StyledHomePage>
  );
}
