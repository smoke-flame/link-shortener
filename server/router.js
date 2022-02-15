import Router from 'express'
import bodyParser from 'body-parser'
import linkController from './Link/linkController.js'

const router = new Router()
const jsonParser = bodyParser.json()

router.post('/link', jsonParser, linkController.createLink)
router.get('/lk/:short_link', jsonParser, linkController.redirectLink)


export default router