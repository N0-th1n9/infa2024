import express from 'express'
import { getClients } from './client-controller'

const router = express.Router()

router.get('/clients', getClients)

export default router
