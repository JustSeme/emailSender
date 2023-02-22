import { Request, Response, Router } from "express";

export const portfolioRouter = Router()

portfolioRouter.get('/', (req: Request, res: Response) => {
    console.log(req);
    
    res.send({
        message: 'Hello World'
    })
})

portfolioRouter.post('/', (req: Request, res: Response) => {
    console.log(req);
    
    res.send(200)
})