import { css, Global } from '@emotion/react';

export const media = {
    maxMobile: '@media(max-width:800px)',
    minlaptop: '@media(min-width: 800px)',
    laptop: '@media(min-width: 1000px)',
    desktop: '@media(min-width: 1400px)',
    large: '@media(min-width: 1600px)',
    tablet: '@media(min-width:768px)',
};

export const globalStyles = (
    <Global
        styles={css`
            html,
            body {
                overflow-x: hidden;
                background: linear-gradient(
                    245.27deg,
                    #02c39a -341.26%,
                    #02c39a -116.23%,
                    #f7f7f7 87.92%
                );
                padding: 0;
                margin: 0;

                box-sizing: border-box;

                min-height: 100%;

                font-family: 'Poppins', sans-serif;

                scroll-behavior: smooth !important;

                &::-webkit-scrollbar {
                    width: 4px;
                }
                &::-webkit-scrollbar-track {
                    background: #111510;
                }
                &::-webkit-scrollbar-thumb {
                    background-color: #00a87e;
                    border-radius: 20px;
                }

                ${media.maxMobile} {
                    overflow-y: hidden;
                }
            }

            @keyframes kick {
                to {
                    transform: translateY(15px);
                }
            }

            @keyframes growup {
                from {
                    transform: scale(0);
                }
                to {
                    transform: scale(1);
                }
            }

            @keyframes leftoright {
                from {
                    transform: translateX(-100px);
                }
            }

            @keyframes showup {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            @keyframes blink {
                0% {
                    opacity: 0;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }
            @keyframes float {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-5px);
                }
                100% {
                    transform: translateY(0);
                }
            }

            @keyframes wave {
                0% {
                    margin-left: 0;
                }
                100% {
                    margin-left: -1600px;
                }
            }
            @keyframes swell {
                0%,
                100% {
                    transform: translate3d(0, -25px, 0);
                }
                50% {
                    transform: translate3d(0, 5px, 0);
                }
            }

            @keyframes moveBg {
                from {
                    background-position: 0% 0%;
                }

                to {
                    background-position: 0% 50%;
                }
            }

            @keyframes progress {
                to {
                    width: 0;
                }
            }

            @keyframes loading {
                to {
                    transform: rotate(1turn);
                }
            }
        `}
    />
);
