import express from 'express'
import { portfolioRouter } from './routes/portfolioRouter'
import { settings } from './settings'
import cors from 'cors'

const PORT = process.env.PORT || settings.PORT

const app = express()
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)
app.use(cors())

app.listen(PORT, () => {
    console.log('Server listen on port', PORT);
})

app.use('/portfolio-api', portfolioRouter)