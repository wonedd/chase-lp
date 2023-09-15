import styled from '@emotion/styled';
import { media } from '../../../shared/styles';

interface ContainerProps {
    isOpen: boolean;
}

type TextProps = ContainerProps;

export const Container = styled.section<ContainerProps>`
    width: 100vw;
    min-height: 100vh;

    background: linear-gradient(
        71.25deg,
        #111510 27.38%,
        #00a87e 211.2%,
        #02c39a 257.48%
    );

    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};

    display: flex;
    flex-direction: column;
    position: fixed;

    top: -100%;

    ${props => props.isOpen && 'top: 0;'}

    transition: 1s;

    z-index: 10;

    ${media.maxMobile} {
        padding-top: 120px;
    }
`;

export const Ocean = styled.div`
    height: 5%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #00a87e;
`;

export const Wave = styled.div`
    background: url('/assets/btn-wave.svg') repeat-x;
    width: 6400px;
    height: 198px;

    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);

    position: absolute;
    top: -198px;

    &:nth-of-type(2) {
        top: -175px;
        animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
            swell 7s ease -1.25s infinite;
        opacity: 1;
    }
`;

export const Logo = styled.img`
    position: absolute;

    top: 32px;
    right: 32px;

    width: 15%;
    max-width: 200px;
    animation: float 2s linear infinite;

    cursor: pointer;
`;

export const TextContainer = styled.div`
    padding: 32px;
    padding-top: 0;
`;

export const MainTextBox = styled.div<TextProps>`
    color: #f7f7f7;
    font-size: 2rem;
    font-weight: 600;

    animation: ${props => props.isOpen && 'leftoright 2s ease normal'};

    strong {
        color: #00a87e;
    }

    ${media.maxMobile} {
        font-size: 0.8rem;
        width: 220px;
    }

    ${media.minlaptop} {
        font-size: 1.6rem;
        width: 550px;
    }
    ${media.desktop} {
        font-size: 1.8rem;
        width: 600px;
    }
    ${media.large} {
        font-size: 2.2rem;
        width: 650px;
    }
`;

export const TextBox = styled.div<TextProps>`
    font-weight: 600;
    color: #f7f7f7;

    width: 600px;

    animation: ${props => props.isOpen && 'leftoright 3s ease normal'};

    strong {
        color: #00a87e;
    }

    ${media.maxMobile} {
        font-size: 0.8rem;
        width: 220px;
    }

    ${media.minlaptop} {
        font-size: 1.6rem;
        width: 550px;
    }

    ${media.desktop} {
        font-size: 1.8rem;
        width: 600px;
    }
    ${media.large} {
        font-size: 2.2rem;
        width: 650px;
    }
`;
