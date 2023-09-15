import styled from '@emotion/styled';
import { media } from '../../../shared/styles';

export const Container = styled.section`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    position: relative;

    background: linear-gradient(
        71.25deg,
        #111510 27.38%,
        #00a87e 211.2%,
        #02c39a 257.48%
    );

    ${media.maxMobile} {
        gap: 16px;
    }
`;

export const Logo = styled.img`
    position: absolute;

    top: 32px;
    left: 32px;

    width: 150px;
    height: 150px;

    animation: float 2s linear infinite;

    cursor: pointer;

    ${media.maxMobile} {
        width: 80px;
        height: 80px;
    }
`;

export const Wave = styled.img`
    position: absolute;

    bottom: 0;
    width: 100vw;
    opacity: 0.1;
`;

export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 0;

    color: #f7f7f7;

    position: relative;

    top: 30%;

    ${media.minlaptop} {
        left: 0;
    }
    ${media.desktop} {
        left: -150px;
    }
`;

export const MainTitle = styled.h1`
    display: flex;
    align-items: center;
    height: 0;
    gap: 8px;

    animation: leftoright 2s ease normal;

    font-weight: 600;
    font-size: 3.5rem;

    ${media.maxMobile} {
        font-size: 1.5rem;
    }
    h3 {
        display: flex;
        align-items: center;

        font-weight: 600;
        font-size: 3.5rem;

        color: #02c39a;
        height: 0;

        ${media.maxMobile} {
            font-size: 1.5rem;
        }
    }
`;

export const Title = styled.h1`
    padding-left: 120px;

    font-weight: 600;
    font-size: 3.5rem;

    animation: leftoright 3s ease normal;

    ${media.maxMobile} {
        font-size: 1.5rem;
        padding-left: 0;
    }
`;
