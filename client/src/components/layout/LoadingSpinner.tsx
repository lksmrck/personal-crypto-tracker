import { FC } from "react";
import { StyledLoadingSpinner } from "./styled";

const LoadingSpinner: FC = () => {
  return (
    <StyledLoadingSpinner>
      <div className="loading-spinner"></div>
    </StyledLoadingSpinner>
  );
};
export default LoadingSpinner;
