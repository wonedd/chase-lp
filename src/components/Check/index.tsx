import { useRouter } from 'next/router';
import { useState } from 'react';
import { About } from '../About';
import { Button } from './Button';
import { Container, Logo, MainTitle, Title, TitleBox, Wave } from './styles';

export function Check() {
    const [isHovering, setIsHovering] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { push } = useRouter();

    return (
        <Container id="check">
            <About isOpen={isOpen} />
            <Logo
                src={
                    isHovering ? '/assets/logo.svg' : '/assets/logo-invert.svg'
                }
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => {
                    setIsOpen(false);
                    push('/#intro');
                }}
            />
            <Wave src="/assets/wave.svg" />
            <TitleBox>
                <MainTitle>
                    <h3>Fast</h3> and <h3>stylish</h3>
                </MainTitle>
                <Title>Interactive applications</Title>
            </TitleBox>

            <Button onClick={() => setIsOpen(true)} />
        </Container>
    );
}
