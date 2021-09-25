import { createGlobalStyle } from "styled-components";
import './theme.styles.css';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.backgroundColor};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50%;
  }

  * {
    font-family: 'Nunito', sans-serif;
  }

  a {
    transition: 0.3s;
    color: inherit;
    text-decoration: none;
    opacity: 0.5;
  }

  a&:hover {
    opacity: 1;
  }
  .card {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

export const lightTheme = {
  body: "#f0f0f0",
  text: "#121212",
  backgroundColor: "#f0f0f0",
  boxShadow: "0 0 10px rgba(0,0,0,0.4)",
};

export const darkTheme = {
  body: "#282c39",
  text: "#f1f1f1",
  backgroundColor: "#282c39",
  boxShadow: "0 0 10px rgba(255,255,255,0.5)"
};
