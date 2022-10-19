import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledLoadingSpinner = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 40px;
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #383636;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
    margin-top: 10px;
  }
`;

export const StyledNavContainer = styled.header`
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  height: 5rem;
  display: flex;
  padding: 0 2% 0 4%;
  justify-content: space-between;
  align-items: center;
  background-color: #008080;
  ${theme.navbarShadow}
  @media only screen and (max-width: 625px) {
    padding-left: 2.5%;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    font-family: monospace;

    img {
      margin-top: 8px;
    }

    cursor: pointer;
    @media only screen and (max-width: 625px) {
      font-size: 1.2rem;
    }
  }
  .logo-text {
    margin-left: 1rem;
    margin-top: 0.3rem;
  }
  .hamburger {
    display: none;

    @media only screen and (max-width: 1030px) {
      display: flex;
    }
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 330px;

    cursor: pointer;
    @media only screen and (max-width: 625px) {
      width: 145px;
    }
    p {
      color: #e6fcfc;
      font-size: 18px;
      @media only screen and (max-width: 550px) {
        font-size: 11px;
      }
    }
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
  margin-left: 1.5rem;
  align-items: center;
  justify-content: space-between;

  .right-side {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1%;

    button {
      margin-left: 4%;
    }
    @media only screen and (max-width: 625px) {
      justify-content: flex-end;
      margin-left: -15px;
    }
  }
  .right-side > * {
    margin: 2% 0 2% 2%;
  }

  .right-nav-button {
    @media only screen and (max-width: 1030px) {
      display: none;
    }
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    width: 90%;
    @media only screen and (max-width: 1030px) {
      display: none;
    }
  }

  li {
    margin-left: 1.5rem;
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
    color: #88dfdf;
  }
  a:hover,
  a:active,
  a.active {
    color: #e6fcfc;
  }
  .button-wrapper {
    button {
      height: 3rem;
    }
  }
  .sign-in-button-container {
    width: 100px;
  }
`;

export const StyledFooter = styled.footer`
  color: #87dfdf;
  background-color: #008080;
  padding-top: 0.5em;
  position: relative;
  bottom: 0;
  width: 100vw;
  margin-top: 3rem;

  .row {
    img {
      margin-right: 0.7rem;
    }
    display: flex;
    justify-content: space-between;
  }

  .row-icons {
    margin: 0.5rem 3rem 0 0;
    @media only screen and (max-width: 615px) {
      margin: 0.5rem 1rem 0 0.5rem;
    }
  }

  .col {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    margin-left: 2.5rem;
    font-family: monospace;
    font-size: 16px;
    cursor: pointer;
    @media only screen and (max-width: 615px) {
      margin-left: 1rem;
    }
  }
  .text-left {
    font-size: 12px;
    margin: 0.2rem 0 0.2rem 2.5rem;
    font-family: monospace;
    @media only screen and (max-width: 615px) {
      font-size: 9px;
      margin-left: 0.5rem;
    }
  }
  .text-right {
    font-size: 12px;
    font-family: monospace;
    margin-right: 1rem;
    @media only screen and (max-width: 615px) {
      font-size: 8px;
      margin-right: 0.5rem;
    }
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
`;
