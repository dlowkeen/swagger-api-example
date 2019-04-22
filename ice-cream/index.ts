import * as express from 'express';
import * as iceCream from './ice-cream';

let router = express.Router();

router.route('').post(iceCream.addOne);
router.route('').get(iceCream.getAll);
router.route('/:flavorId').get(iceCream.getOne);

export = router;
