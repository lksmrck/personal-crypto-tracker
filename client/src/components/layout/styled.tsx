import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledNavContainer = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  padding: 0 2% 0 4%;
  justify-content: space-between;
  align-items: center;
  background-color: #008080;
  ${theme.navbarShadow}

  .nav-logo {
    display: flex;
    font-size: 1.5rem;
    color: white;
    font-family: monospace;
    cursor: pointer;
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
    @media only screen and (max-width: 550px) {
      width: 255px;
    }
    p {
      color: #e6fcfc;
      margin-right: 2%;
      font-size: 18px;
      @media only screen and (max-width: 550px) {
        font-size: 15px;
      }
    }
  }
`;

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

export const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
  margin-left: 1.5rem;
  align-items: center;
  justify-content: space-between;

  .navbar-items-container {
    display: none;
  }
  .prava-cast {
    display: flex;
    align-items: center;
    margin-right: 1%;
    button {
      margin-left: 4%;
    }
  }
  .prava-cast > * {
    margin: 2%;
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
  color: white;
  background-color: #008080;
  padding-top: 0.5em;
  position: relative;
  bottom: 0;

  width: 100%;
  margin-top: 3rem;

  .row {
    display: flex;
    justify-content: space-between;
  }
  .col {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-left: 2.5rem;
    font-family: monospace;
    font-size: 16px;
  }
  .text-left {
    font-size: 12px;
    margin: 0.2rem 0 0.2rem 2.5rem;
    font-family: monospace;
  }
  .text-right {
    font-size: 12px;
    font-family: monospace;
    margin-right: 1rem;
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
