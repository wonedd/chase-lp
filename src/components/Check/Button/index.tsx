import { Container } from './styles';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export function Button({ ...rest }: ButtonProps) {
    return (
        <Container {...rest}>
            <p>CHECK ABOUT US</p>
        </Container>
    );
}
