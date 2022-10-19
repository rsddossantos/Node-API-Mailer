import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {
    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "4a4f59f3233fd3",
            pass: "7bb8c9a0c4d8c2"
        }
    });
    let message = {
        from: 'Suporte <suporte@node.com>',
        to: 'rodrigo.santos@ipdvonline.com.br',
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email
    };
    let info = await transport.sendMail(message);

    console.log("INFO", info);

    res.json({ success: true });
}

