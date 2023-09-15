import styled from '@emotion/styled';
import { media } from './styles';

export const Container = styled.main`
    width: 100vw;
    min-height: 100vh;

    background-color: #222222;
    background-image: url('/assets/globe-orange.svg');
    background-repeat: no-repeat;
    background-position: right bottom;

    display: flex;
    flex-direction: column;

    ${media.maxMobile} {
        background-size: contain;
        background-position: bottom;
    }
`;

export const Logo = styled.img`
    min-width: 150px;
    width: 10%;

    position: fixed;
    right: 32px;
    top: 32px;

    cursor: pointer;

    animation: float 2s linear infinite;

    ${media.maxMobile} {
        min-width: 60px;
        width: 15%;
    }
`;

export const Intro = styled.section`
    display: flex;
    flex-direction: column;

    svg {
        animation: kick 1s infinite alternate;

        position: absolute;
        bottom: 32px;

        cursor: pointer;

        border: 1px solid transparent;
        border-radius: 50%;
        color: #f7f7f7;

        transition: 0.2s;

        &:hover {
            color: #f77f00;
            backdrop-filter: brightness(95%);
        }
    }
`;

export const ArrowButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
`;
