import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .card {
    box-shadow: 0 -2px 10px;
  }
`;

export const lightTheme = {
  body: "#ffffff",
  text: "#121212",
};

export const darkTheme = {
  body: "#121212",
  text: "#f1f1f1",
};
