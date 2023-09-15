import { Container, ProgressBar } from './styles';

interface ToastProps {
    isSuccess: boolean;
    isOpen: boolean;
    children: React.ReactNode;
}

export function Toast({ children, isSuccess, isOpen }: ToastProps) {
    return (
        <Container isSuccess={isSuccess} isOpen={isOpen}>
            <p>{children}</p>
            <ProgressBar isSuccess={isSuccess} isOpen={isOpen} />
        </Container>
    );
}
