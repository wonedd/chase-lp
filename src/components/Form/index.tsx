import { useRouter } from 'next/router';
import { MdWavingHand } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ByeButton, Container, Loading } from './styles';
import { api } from '../../services/api';
import { Toast } from './Toast';

interface FormProps {
    isOpen: boolean;
}

interface FormData {
    name: string;
    email: string;
    message: string;
}

export function Form({ isOpen }: FormProps) {
    const { reload } = useRouter();
    const { register, handleSubmit, reset } = useForm();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isToastOpen, setIsToastOpen] = useState(false);
    const [ToastMessage, setToastMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: FormData) => {
        try {
            setIsLoading(true);
            await api.post('mail', data);

            setIsSuccess(true);
            setToastMessage('Message sent successfully!');
            setIsToastOpen(true);

            setTimeout(() => {
                setIsToastOpen(false);
            }, 3000);

            reset();
        } catch (err) {
            setIsToastOpen(true);
            setIsSuccess(false);
            setToastMessage('An error occurred, please try again later.');
            setTimeout(() => {
                setIsToastOpen(false);
            }, 3000);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Container isOpen={isOpen}>
            <Toast isOpen={isToastOpen} isSuccess={isSuccess}>
                {ToastMessage}
            </Toast>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    {...register('title')}
                />
                <input
                    type="name"
                    placeholder="Name"
                    name="name"
                    {...register('name')}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    {...register('email')}
                />

                <textarea
                    placeholder="Message"
                    name="message"
                    {...register('message')}
                />

                <button type="submit">
                    {isLoading ? <Loading /> : 'SEND'}
                </button>
            </form>
            <ByeButton type="button" onClick={() => reload()}>
                SEE YOU!
                <MdWavingHand />
            </ByeButton>
        </Container>
    );
}
