import styled from "styled-components";
import { centerItems } from "../../common/theme";

export const StyledAuth = styled.form`
  .auth-wrapper {
    width: 2000px;
    display: flex;
    justify-content: center;
  }

  .auth-container {
    background-color: white;
  }
  /* height: 300px; */
  width: 15%;
  /*   border: 1px solid red; */

  .buttons-container {
    /* ${centerItems} */
  }
`;

export const StyledTestAuth = styled.div`
  margin-top: 7%;

  .paper {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
  .avatar {
    margin: 5px;
    margin-top: 10px;
    background-color: red;
  }
  .form {
    width: 100%;
    margin-top: 10px;
  }
  .submit {
    margin: 6px 0px 2px;
  }
  .google-button {
    margin-bottom: 5px;
    margin-top: 5px;
  }
`;
