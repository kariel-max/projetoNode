"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fitshes = exports.cats = exports.dogs = exports.home = void 0;
const pets_1 = require("../models/pets");
const createMenuObjets_1 = require("../helpers/createMenuObjets");
const home = (req, res) => {
    let list = pets_1.Pet.getAll();
    res.render('pages/page', {
        menu: (0, createMenuObjets_1.createMenuObejct)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = pets_1.Pet.getFromType('dog');
    res.render('pages/page', {
        menu: (0, createMenuObjets_1.createMenuObejct)('dog'),
        banner: {
            title: 'Todos os cachorros disponiveis para doação',
            background: 'banner_dog.jpg'
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = pets_1.Pet.getFromType('cat');
    res.render('pages/page', {
        menu: (0, createMenuObjets_1.createMenuObejct)('cat'),
        banner: {
            title: 'Todos os gatos disponiveis para doação',
            background: 'banner_cat.jpg'
        },
        list
    });
};
exports.cats = cats;
const fitshes = (req, res) => {
    let list = pets_1.Pet.getFromType('fish');
    res.render('pages/page', {
        menu: (0, createMenuObjets_1.createMenuObejct)('fish'),
        banner: {
            title: 'Todos os peixes disponiveis para doação',
            background: 'banner_fish.jpg'
        },
        list
    });
};
exports.fitshes = fitshes;
