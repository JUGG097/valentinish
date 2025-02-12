import { createGlobalStyle } from "styled-components";
import backgroundImg from "../img/backgroud.jpg"

export const GlobalStyle = createGlobalStyle`
    body {
        background: url(${backgroundImg});
        background-size: auto;
        /* font-family: 'Noto Sans', sans-serif; */
        font-family: "Pangolin", serif;
        color: #483C32;
    }
    input::placeholder {
		/* color: #828282; */
        color: #483C32;
		font-size: 16px;
	}
    .header-text {
        color: #483C32;
        font-weight: bold;
        font-size: 32px;
        margin-bottom: 10px;
    }
    p {
        color: #483C32;
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 10px;
    }
    button {
        background: #e26f66;
        color: #FFFFFF;
        border: solid;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
`;