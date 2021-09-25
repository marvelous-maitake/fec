import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .card {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

export const lightTheme = {
  body: "#ffffff",
  text: "#121212",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

export const darkTheme = {
  body: "#121212",
  text: "#f1f1f1",
  boxShadow: "0 4px 8px 0 rgba(255,255,255,0.2)",
};
