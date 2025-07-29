const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
    
});

const send = (nome, email, menssage) => {

    transporter.sendMail({
    
        from: process.env.MAIL_EMAIL_USER,
        to: process.env.MAIL_EMAIL_RECEIVER,
        subject: 'Nova mensagem do site',
        text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${menssage}`
})};

module.exports = send;