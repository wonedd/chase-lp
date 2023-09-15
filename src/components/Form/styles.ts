import styled from '@emotion/styled';
import { media } from '../../../shared/styles';

interface ContainerProps {
    isOpen: boolean;
}

export const Container = styled.section<ContainerProps>`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;

    position: relative;

    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};

    width: 100vw;

    background: linear-gradient(
        71.25deg,
        #111510 27.38%,
        #00a87e 211.2%,
        #02c39a 257.48%
    );

    position: fixed;
    top: 0;
    right: -100%;

    ${props => props.isOpen && 'right: 0;'}

    transition: 1s;
    z-index: 10;

    form {
        min-height: 100vh;
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        gap: 16px;

        button {
            all: unset;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid #02c39a;
            padding: 8px;

            min-width: 352px;
            height: 32px;

            cursor: pointer;

            transition: 0.2s;

            color: #02c39a;

            ${media.maxMobile} {
                min-width: 200px;
                width: 80vw;
            }

            &:hover {
                background: #00a87e;
                color: #f7f7f7;
            }
        }

        ${media.maxMobile} {
            position: relative;
            align-items: center;
            justify-content: flex-start;
            top: 64px;
        }
    }

    input {
        padding: 8px;

        outline: none;
        background: transparent;
        border: 1px solid #02c39a;

        width: 352px;
        height: 24px;

        font-family: 'JetBrains Mono';
        letter-spacing: 2px;
        color: #02c39a;

        &::placeholder {
            color: #02c39a;
        }

        &:focus {
            animation: float 1.5s ease-in-out infinite alternate;
        }
        ${media.maxMobile} {
            width: 80vw;
        }
    }
    textarea {
        resize: none;
        padding: 8px;

        width: 352px;
        height: 128px;

        outline: none;
        background: transparent;
        border: 1px solid #02c39a;

        font-family: 'JetBrains Mono';
        letter-spacing: 2px;

        color: #02c39a;

        &::placeholder {
            color: #02c39a;
        }

        &:focus {
            animation: float 1.5s ease-in-out infinite alternate;
        }

        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-track {
            background: #111510;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #02c39a;
            border-radius: 20px;
        }

        ${media.maxMobile} {
            width: 80vw;
        }
    }

    ${media.maxMobile} {
        justify-content: flex-start;
        justify-content: center;
    }
`;

export const ByeButton = styled.button`
    all: unset;

    animation: float 1.5s ease-in-out infinite alternate;

    display: flex;
    align-items: center;
    gap: 15px;

    letter-spacing: -1px;

    color: #02c39a;
    font-family: 'JetBrains Mono';
    font-size: 1.8rem;

    position: absolute;
    bottom: 64px;
    right: 64px;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
        color: #00a87e;

        svg {
            transition: 0.2s;
            transform: scale(1.2);
        }
    }

    svg {
        width: 24px;
    }
    ${media.maxMobile} {
        display: none;
        visibility: hidden;
    }
`;

export const Loading = styled.div`
    width: 16px;
    height: 16px;

    border: 3px solid #00a87e;
    border-top: 3px solid transparent;

    border-right: 3px solid transparent;
    border-radius: 50%;

    margin: 0 auto;

    animation: loading 0.5s linear infinite;
`;
