const express = require('express');
const cors = require('cors');
const mailRouter = require('./routes/mail.routes')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());


app.use('/api', mailRouter);



app.listen(port, () => {
    console.log('servidor esta rodando no http://localhost:' + port);
});
