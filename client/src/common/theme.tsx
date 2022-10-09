import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      [key: string]: string;
    };
    borderRadius: string;
    navbarShadow: string;
    boxShadow: string;
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
    red: "#ee5761",
    green: "#2bcc8f",
  },
  navbarShadow:
    "-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75); -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75); ",

  boxShadow:
    "-webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75); -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75); box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);",
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
color: #ec4852;

`;
/* ed5860 */
