import { Request, Response } from "express";


export const home = (req: Request, res: Response) => {
    res.send('você esta na pagína home')
    // res.render('pages/page')
}

export const dogs = (req: Request, res: Response) => {
    res.send('você esta na pagína dogs')
    // res.render('pages/page')
}
export const cats = (req: Request, res: Response) => {
    res.send('você esta na pagína cats')
    // res.render('pages/page')
}
export const fitshes = (req: Request, res: Response) => {
    res.send('você esta na pagína fitshes')
    // res.render('pages/page')
}


