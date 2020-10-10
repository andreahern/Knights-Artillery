const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});


const app = express();
app.use(cors());
app.use(express.json());



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
