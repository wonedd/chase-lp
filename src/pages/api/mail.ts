import { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { name, title, email, message } = req.body;

        if (!title || !name || !email || !message) {
            return res.status(400).json({ error: 'Missing body parameter' });
        }

        const mail = {
            from: email,
            to: 'easytemplates2022@gmail.com',
            subject: `${title} - ${name}`,
            text: message,
        };

        const transporter = createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'jamarcus.block@ethereal.email',
                pass: 'u5hwHtAyCJ1SSwnzgh',
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        try {
            await transporter.sendMail(mail);

            return res.status(200).json({ message: 'Email sent' });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    res.setHeader('Allow', 'POST');

    res.status(405).end('Method not allowed');

    return res.status(400).json({ error: 'Wrong request method' });
};
