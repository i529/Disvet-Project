const send = require("../services/nodemailer");

const sendMail = async (req, res) => {
    const {nome, email, menssage} = req.body;
    send (nome, email, menssage);
    
    return res.json('E-mail enviado com sucesso.')
};

module.exports = { 
    sendMail 
};
