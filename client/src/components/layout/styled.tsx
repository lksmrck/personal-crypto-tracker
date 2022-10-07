import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  padding: 0 2% 0 7%;

  align-items: center;
  background-color: #008080;
  ${theme.navbarShadow}

  .nav-logo {
    font-size: 1.5rem;
    color: white;
    font-family: monospace;
    cursor: pointer;
  }
  .logo-tracker {
    margin-left: 1.5rem;
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
  margin-left: 1.5rem;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    width: 90%;
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
    .logged-in {
      display: flex;
      align-items: center;
      color: white;
      cursor: pointer;
    }
    .logged-in > * {
      margin: 1rem;
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
