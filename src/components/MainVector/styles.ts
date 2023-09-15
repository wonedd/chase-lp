import styled from '@emotion/styled';
import { media } from '../../../shared/styles';

export const Container = styled.div`
    ${media.maxMobile} {
        width: 100%;
        position: relative;

        left: 32px;
        top: 144px;

        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`;

export const Triangle = styled.img`
    animation: growup 1.5s ease normal;
    width: 70%;

    ${media.maxMobile} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileTriangle = styled.img`
    animation: growup 1.5s ease normal;
    width: 70%;

    ${media.minlaptop} {
        display: none;
        visibility: hidden;
    }
`;
