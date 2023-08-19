// const express = require('express');
import  express  from "express";
import dotenv from 'dotenv';
import Router from './Routes/route.js'
import connection from'./database/db.js'
import DefaultData from "./DefaultData.js";
import bodyParser from "body-parser";
import cors from 'cors'
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({extended:true}))
app.use(cors())
app.use('/',Router)
dotenv.config()
const PORT = process.env.PORT || 8000;


const   USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


 
connection( USERNAME,PASSWORD);


app.listen(PORT,()=>console.log(`Server is running on port no.${PORT} `))

DefaultData();