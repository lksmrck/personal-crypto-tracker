import styled from "styled-components";
import { centerItems, theme } from "../../common/theme";

export const StyledAddTransaction = styled.div`

`;

export const StyledForm = styled.form`
display: flex;
justify-content: center;
border: 2px black solid;
height: 400px;

.form {
    ${centerItems};
    margin-top: 20px;
    width: 500px;
    /* border: 2px red solid; */
    border-radius: 15px;
    height: 350px;
    box-shadow: ${theme.cardShadow}
   
}

`;
