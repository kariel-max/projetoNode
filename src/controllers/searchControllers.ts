import { Request, Response } from "express";

export const search = (req: Request, res: Response) => {
    res.send('esta é uma abra de pesquisa')
    // res.render('pages/page')
}