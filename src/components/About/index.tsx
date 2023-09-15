import { useState } from 'react';
import { Form } from '../Form';
import { Button } from './Button';
import {
    Container,
    Logo,
    MainTextBox,
    Ocean,
    TextBox,
    TextContainer,
    Wave,
} from './styles';

interface AboutProps {
    isOpen: boolean;
}

export function About({ isOpen }: AboutProps) {
    const [isHovering, setIsHovering] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <Container isOpen={isOpen}>
            <Logo
                src={
                    isHovering ? '/assets/logo.svg' : '/assets/logo-invert.svg'
                }
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            />
            <TextContainer>
                <MainTextBox isOpen={isOpen}>
                    <p>
                        We are developers who believe that{' '}
                        <strong>smooth</strong>, <strong>interactive</strong>{' '}
                        layouts shape the way you see your brand.
                    </p>
                </MainTextBox>
                <TextBox isOpen={isOpen}>
                    <p>
                        Our goal is to{' '}
                        <strong>
                            change the way web application development is viewed
                        </strong>
                        , to demystify major complications and to{' '}
                        <strong>give wings to thinking.</strong>
                    </p>
                </TextBox>
            </TextContainer>
            <Button onClick={() => setIsContactOpen(true)} />

            <Ocean>
                <Wave />
                <Wave />
            </Ocean>
            <Form isOpen={isContactOpen} />
        </Container>
    );
}
