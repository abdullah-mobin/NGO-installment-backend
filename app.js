import express, { json } from 'express'
import cors from 'cors'
import Config from './config/config.js'
import Routes from './src/routes/routes.js'
import { LogRequest } from './src/middleware/logger.js'

const app = express()

app.use(cors())
app.use(json());
app.use(LogRequest)
app.use('/api/v1', Routes)

app.listen(Config.PORT, () => {
	console.clear()
	console.log(`server is running at : http://${Config.HOST}:${Config.PORT}`)
})
