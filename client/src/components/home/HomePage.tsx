import React from "react";
import { StyledHomePage } from "./styled";

export default function HomePage() {
  return (
    <StyledHomePage>
      <div className="home-container">
        <div className="home-nav">
          <h1>Welcome to Crypto Tracker.</h1>
          <p>Add Transaction</p>
          <p>Statistics</p>
          <p>Transaction history</p>
        </div>
        <div className="home-dashboard"></div>
      </div>
    </StyledHomePage>
  );
}
