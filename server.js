const express = require('express');
//Route files
const bootcamps = require('./routes/bootcamps');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);


app.listen(
    process.env.PORT || 5000,
    console.log(`Server running in ${process.env.NODE_ENV} mode in port ${process.env.PORT}`)
);