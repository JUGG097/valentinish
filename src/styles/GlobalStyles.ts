import { createGlobalStyle } from "styled-components";
import backgroundImg from "../img/backgroud.jpg";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #fff5f7;
        /* font-family: 'Noto Sans', sans-serif; */
        font-family: "Inter", sans-serif;
        color: #483C32;
    }
    input::placeholder {
		/* color: #828282; */
        color: #483C32;
		font-size: 16px;
	}
    .header-text {
        color: #9f1239;
        font-size: 38px;
        margin-bottom: 10px;
    }
    .font-cursive {
        font-family: 'Dancing Script', cursive;
    }
    .font-display {
        font-family: "DM Serif Display", serif;
    }
    .font-question-display {
        font-family: 'Be Vietnam Pro', sans-serif;
    }
    .reveal-btn-glow {
        box-shadow: 0 0 20px rgba(225, 29, 72, 0.4);
    }

    .glass-morphism {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
    }
    .dark .glass-morphism {
        background: rgba(34, 16, 21, 0.6);
        border: 1px solid rgba(238, 43, 91, 0.2);
    }
    .no-button-dodge:hover {
        transform: scale(0.8) translate(10px, 10px);
        opacity: 0.6;
        transition: all 0.3s ease;
    }

    /* Tilted photo cards */
    .tilt-card {
        transform: rotate(var(--tilt));
        transform-origin: center center;
        transition: transform 220ms ease, box-shadow 220ms ease;
    }
    .tilt-card:hover {
        transform: rotate(0deg) scale(1.03);
        z-index: 10;
        box-shadow: 0 20px 50px rgba(0,0,0,0.18);
    }
`;
