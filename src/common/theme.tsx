import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      [key: string]: string;
    };
    fontSize: {
      [key: string]: string;
    };
    padding: {
      [key: string]: string;
    };
    margin: {
      [key: string]: string;
    };
    borderRadius: string;
    headerShadow: string;
    cardShadow: string;
  }
}

const commonThemeProperties = {
  fontSize: {
    xs: "0.75rem", //.12
    small: "0.875rem", // 14
    standard: "1rem", // 16
    medium: "1.125rem", // 18
    title: "1.313rem", // 21
    large: "1.5rem", // 24
    xl: "2rem", // 32
  },
  padding: {
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
  },
  margin: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
  },
  borderRadius: "8px",
};

export const theme: DefaultTheme = {
  color: {
    layoutBg: "#dce2f1",
    cardBg: "#FFFF",
    text: "#001e3c",
    contrastBg: "#436fe5",
    label: "#a0a6af",
    red: "#eb4c9b",
    green: "#1ab586",
  },
  headerShadow:
    "rgb(167 175 183 / 32%) 5px 6px 5px 1px, rgb(190 205 245) 0px 2px 4px 0px;",
  cardShadow:
    "rgb(14 23 102 / 40%) 0px 2px 6px, rgb(233 241 248 / 75%) 0px 2px 4px",
  ...commonThemeProperties,
};

export const darkTheme: DefaultTheme = {
  color: {
    layoutBg: "#082c46",
    cardBg: "#1b3e5a",
    text: "#ffffff",
    contrastBg: "#cbd5f2",
    label: "#bbc5ce",
    red: "#eb4c9b",
    green: "#1ab586",
  },
  headerShadow: "rgb(0 0 0 / 10%) 0px 4px 4px, rgb(6 8 20 / 70%) 0px 1px 10px",
  cardShadow:
    "rgb(6 8 20 / 60%) 0px 1px 8px 0px, rgb(0 0 0 / 15%) 0px 4px 4px 0px",
  ...commonThemeProperties,
};

export const centerItems = `
display: flex;
justify-content: center;
align-items: center;

`;

export const cardSize = `
width: 31.3%;
height: 400px;
`;
