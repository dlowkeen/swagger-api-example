import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as routes from './routes';
import * as cors from 'cors';
const PORT = 3000;

let app = express();

app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use('/', routes);

app.listen(PORT, () => { console.log(`Running on port ${PORT}`); });

module.exports = app;
