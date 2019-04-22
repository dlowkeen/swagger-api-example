import * as express from 'express';
const swaggerUi = require('swagger-ui-express');
import * as specs from './swagger';

// import sub-routers
import * as iceCreamRouter from './ice-cream';
import * as cookieRouter from './cookies';

let router = express.Router();

router.use('/ice-cream', iceCreamRouter);
router.use('/cookies', cookieRouter);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs.default));

router.get('/healthcheck', (req, res) => res.send('OK'));

module.exports = router;

