"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pets_1 = require("../models/pets");
const createMenuObjets_1 = require("../helpers/createMenuObjets");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect('/');
        return;
    }
    let list = pets_1.Pet.getFromName(query);
    res.render('pages/page', {
        menu: (0, createMenuObjets_1.createMenuObejct)(''),
        list,
        query
    });
};
exports.search = search;
