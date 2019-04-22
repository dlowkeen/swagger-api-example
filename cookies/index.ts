import * as express from 'express';
import * as cookies from './cookies';

let router = express.Router();

router.route('').post(cookies.addOne);
router.route('').get(cookies.getAll);
router.route('/:flavorId').get(cookies.getOne);

export = router;
