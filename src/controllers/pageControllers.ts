import { Request, Response } from "express";
import { Pet } from '../models/pets'
import { createMenuObejct } from '../helpers/createMenuObjets'


export const home = (req: Request, res: Response) => {

    let list = Pet.getAll();
    
     res.render('pages/page', {
        menu: createMenuObejct('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
     })
    
}

export const dogs = (req: Request, res: Response) => {

    let list = Pet.getFromType('dog')
    res.render('pages/page', {
        menu: createMenuObejct('dog'),
        banner: {
            title: 'Todos os cachorros disponiveis para doação',
            background: 'banner_dog.jpg'
        },
        list
     })
}
export const cats = (req: Request, res: Response) => {

    let list = Pet.getFromType('cat')

    res.render('pages/page', {
        menu: createMenuObejct('cat'),
        banner: {
            title: 'Todos os gatos disponiveis para doação',
            background: 'banner_cat.jpg'
        },
        list
     })
}
export const fitshes = (req: Request, res: Response) => {

    let list = Pet.getFromType('fish')

    res.render('pages/page', {
        menu: createMenuObejct('fish'),
        banner: {
            title: 'Todos os peixes disponiveis para doação',
            background: 'banner_fish.jpg'
        },
        list
     })
}


