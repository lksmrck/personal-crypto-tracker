import React from "react";
import { StyledLoadingSpinner } from "./styled";

const LoadingSpinner: React.FC = () => {
  return (
    <StyledLoadingSpinner>
      <div className="loading-spinner"></div>
    </StyledLoadingSpinner>
  );
};
export default LoadingSpinner;
