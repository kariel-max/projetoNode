import express from "express";
import dotenv from 'dotenv';
import { mongoConnect } from './database/mongo'
import mustache from 'mustache-express';
import path from "path";
import rotas from './rotas/index'

dotenv.config();

mongoConnect();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(rotas);

server.use((req, res)=> {
    res.render('pages/404')
})
server.listen(process.env.PORT);
