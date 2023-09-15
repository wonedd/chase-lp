import Link from 'next/link';
import { useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { Container, Logo, Intro, ArrowButton } from '../../shared/home.styles';
import { Check } from '../components/Check';
import { MainVector } from '../components/MainVector';

export default function Home() {
    const [isHovering, setIsHovering] = useState(false);
    const [isChanging, setIsChanging] = useState(false);

    return (
        <Container>
            <Intro id="intro">
                {/* <Logo
                    src={
                        isHovering
                            ? '/assets/logo-invert.svg'
                            : '/assets/logo.svg'
                    }
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                /> */}
                {/* <MainVector /> */}
                <ArrowButton>
                    <Link href="#check">
                        <IoChevronDownOutline
                            size={50}
                            onClick={() => setIsChanging(true)}
                        />
                    </Link>
                </ArrowButton>
            </Intro>
            {isChanging && <Check />}
        </Container>
    );
}
