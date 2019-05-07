import * as express from 'express';
import * as cookies from './cookies';

let router = express.Router();

/**
 * @swagger
 * /cookies:
 *    post:
 *      tags:
 *          - Cookies
 *      summary: This should create a new cookie.
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
 *          description: Receive back flavor and flavor Id of recently added cookie.
 */
router.route('').post(cookies.addOne);

/**
 * @swagger
 * /cookies:
 *    get:
 *      tags:
 *          - Cookies
 *      summary: This should return all cookie flavors.
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Receive back flavor and flavor Id of all cookie flavors.
 */
router.route('').get(cookies.getAll);

/**
 * @swagger
 * /cookies/:flavorId:
 *    get:
 *      tags:
 *          - Cookies
 *      summary: This should return the flavor and id of the specified cookie
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Receive back flavor and flavor Id of speciifed cookie flavors.
 */
router.route('/:flavorId').get(cookies.getOne);

export = router;
