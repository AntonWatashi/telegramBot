'use strict';
import dotenv from 'dotenv/config';
import express from 'express';
import Bot from 'node-telegram-bot-api';

const port = process.env.PORT || 3000;
const app = express();


// const bot = new Bot({

// });




app.listen(port, ()=>{
    console.debug(`Server is up on port ${port}`);
});

