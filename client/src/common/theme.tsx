import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      [key: string]: string;
    };
    borderRadius: string;
    cardShadow: string;
  }
}

const commonProperties = {
  borderRadius: "3px",
};

export const theme: DefaultTheme = {
  color: {
    layoutBg: "#dce2f1",
    cardBg: "#FFFF",
    text: "#001e3c",
    contrastBg: "#436fe5",
    label: "#a0a6af",
    red: "#ea3943",
    green: "#2bcc8f",
  },
  cardShadow:
    "rgb(14 23 102 / 40%) 0px 2px 6px, rgb(233 241 248 / 75%) 0px 2px 4px",
  ...commonProperties,
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

//zatim nepoužito
export const contentWidth = `
width: 1300px;
`;

export const positiveChange = `
color: #2bcc8f;
`;
export const negativeChange = `
color: #ea3943;
  
`;
