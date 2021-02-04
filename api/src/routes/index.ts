import express from 'express'
import {queryUser, queryGames} from '../controllers'

const router = express.Router()

// @ts-ignore
router.get('/users/:email', queryUser)
router.get('/games', queryGames)

export default router
