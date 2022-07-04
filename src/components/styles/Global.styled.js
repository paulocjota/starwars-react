import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        font-family: monospace;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    @keyframes fade-in-bck {
        0% {
            transform: translateZ(80px);
            opacity: 0;
        }
        100% {
            transform: translateZ(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-blurred-top {
        0% {
            transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            transform-origin: 50% 0%;
            filter: blur(40px);
            opacity: 0;
        }
        100% {
            transform: translateY(0) scaleY(1) scaleX(1);
            transform-origin: 50% 50%;
            filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-left {
        0% {
            transform: translateX(-1000px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-right {
        0% {
            transform: translateX(1000px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes zoom-in-down {
        0% {
            opacity: 0;
            transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        }
        60% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
        }
    }
`
