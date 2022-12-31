import { Router, Request, Response} from "express";
import * as SeachControllers from '../controllers/searchControllers'
import * as PageControllers from '../controllers/pageControllers'

const router = Router();

router.get('/', PageControllers.home)
router.get('/dogs', PageControllers.dogs);
router.get('/cats', PageControllers.cats)
router.get('/fitshes', PageControllers.fitshes)

router.get('/search', SeachControllers.search)


export default router;