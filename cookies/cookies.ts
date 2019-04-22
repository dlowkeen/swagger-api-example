import * as express from 'express';

export function addOne(req: express.Request, res: express.Response) {
    try {
      if (!req.body.flavor) {
          res.send({ error: 'no flavor supplied' });
      }
      let response = {
          flavor: req.body.flavor,
          flavorId: Math.floor(Math.random()* 10),
      }
      res.send(response);
    } catch (err) {
      res.send({ error: err.message });
    }
  }

export function getAll(req: express.Request, res: express.Response) {
  try {
    let response = [
        {
            flavor: 'peanut butter',
            flavorId: 1,
        },{
            flavor: 'oatmeal',
            flavorId: 2,
        }
    ]
    res.send(response);
  } catch (err) {
    res.send({ error: err.message });
  }
}

export function getOne(req: express.Request, res: express.Response) {
  try {
    let response;
    if (req.params.flavorId == 1) {
        response = {
            flavor: 'peanut butter',
            flavorId: 1,
        }
    } else if (req.params.flavorId == 2) {
        response = {
            flavor: 'oatmeal',
            flavorId: 2,
        }
    } else {
        response = {
            error: 'flavor does not exist'
        }
    }
    res.send(response);
  } catch (err) {
    res.send({ error: err.message });
  }
}
