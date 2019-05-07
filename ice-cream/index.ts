import * as express from 'express';
import * as iceCream from './ice-cream';

let router = express.Router();

/**
 * @swagger
 * /ice-cream:
 *    post:
 *      tags:
 *          - Ice Cream
 *      summary: This should create a new ice cream.
 *      description: This is where you can give some background as to why this route is being created or perhaps reference a ticket number.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              flavor:
 *                type: string
 *      responses:
 *        200:
 *          description: Receive back flavor and flavor Id.
 */
router.route('').post(iceCream.addOne);

/**
 * @swagger
 * /ice-cream:
 *    get:
 *      tags:
 *          - Ice Cream
 *      summary: This should return all cookie flavors.
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Receive back flavor and flavor Id of all cookie flavors.
 */
router.route('').get(iceCream.getAll);

/**
 * @swagger
 * /ice-cream/:flavorId:
 *    get:
 *      tags:
 *          - Ice Cream
 *      summary: This should return the flavor and id of the specified ice cream
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Receive back flavor and flavor Id of speciifed ice cream flavors.
 */
router.route('/:flavorId').get(iceCream.getOne);

export = router;
