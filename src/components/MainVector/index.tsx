import { Container, MobileTriangle, Triangle } from './styles';

export function MainVector() {
    return (
        <Container>
            <Triangle src="/assets/intro.svg" />
            <MobileTriangle src="/assets/intro-mobile.svg" />
        </Container>
    );
}
