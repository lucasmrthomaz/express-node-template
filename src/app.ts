/**
 Application Backend Entry Point - EXPRESS
 Author: Lucas Thomaz
 Version: 1.0
**/

import express from 'express'
import { router } from './routes'

const app = express()

// Express using following features
app.use(express.json())
app.use('/api', router)

export { app }