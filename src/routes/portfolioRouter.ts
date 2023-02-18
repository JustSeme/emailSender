import { Request, Response, Router } from "express";

export const portfolioRouter = Router()

portfolioRouter.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello World'
    })
})

portfolioRouter.post('sendEmail', () => {

})