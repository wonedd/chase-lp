import styled from '@emotion/styled';
import { media } from '../../../../shared/styles';

export const Container = styled.button`
    all: unset;

    animation: leftoright 2s ease normal;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 352px;
    height: 68px;

    border: 2px solid #02c39a;
    border-radius: 3px;

    cursor: pointer;

    position: relative;
    top: 33%;
    p {
        font-size: 1.5rem;
        font-weight: 600;

        color: #02c39a;
    }

    &:hover {
        transition: 0.2s;
        background-color: #00a87e;
        p {
            color: #f7f7f7;
        }
    }

    ${media.maxMobile} {
        width: 200px;
        height: 50px;

        p {
            font-size: 1rem;
        }
    }
`;
