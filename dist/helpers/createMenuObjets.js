"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObejct = void 0;
const createMenuObejct = (activeMenu) => {
    let returnObejct = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu !== '') {
        returnObejct[activeMenu] = true;
    }
    return returnObejct;
};
exports.createMenuObejct = createMenuObejct;
