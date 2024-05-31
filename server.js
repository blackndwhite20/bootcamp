const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

app.listen(process.env.PORT || 5000, console.log(`Server running in ${process.env.NODE_ENV} mode in port ${process.env.PORT}`));