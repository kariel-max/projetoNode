import express from "express";
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from "path";
import rotas from './rotas/index'

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(rotas);

server.use((req, res)=> {
    res.send('<h1>página não encontrada!</h1>')
})
server.listen(process.env.PORT);