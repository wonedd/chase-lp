import styled from '@emotion/styled';
import { media } from '../../../../shared/styles';

interface ContainerProps {
    isSuccess: boolean;
    isOpen: boolean;
}

type ProgressBarProps = ContainerProps;

export const Container = styled.section<ContainerProps>`
    border: none;

    padding: 0 32px;
    background-color: #111510;

    display: flex;
    align-items: center;

    border-radius: 3px;

    cursor: pointer;

    transition: 0.5s;

    color: ${props => (props.isSuccess ? '#02c39a' : '#FF5343')};

    position: fixed;
    right: -100%;
    top: 32px;

    ${props => props.isOpen && 'right: 32px;'}

    ${media.maxMobile} {
        top: 8px;
        ${props => props.isOpen && 'right: 8px;'}

        font-size: 0.7rem;
    }
`;

export const ProgressBar = styled.div<ProgressBarProps>`
    width: 100%;
    height: 4px;

    background: ${props => (props.isSuccess ? '#02c39a' : '#FF5343')};

    position: absolute;
    bottom: 0;
    left: 0;

    animation: ${props => props.isOpen && 'progress 3.1s 1 linear'};
`;
