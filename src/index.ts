import express from 'express'
import { portfolioRouter } from './routes/portfolioRouter'
import { settings } from './settings'

const PORT = process.env.PORT || settings.PORT

const app = express()
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)

app.listen(PORT, () => {
    console.log('Server listen on port', PORT);
})

app.use('/portfolio-api', portfolioRouter)