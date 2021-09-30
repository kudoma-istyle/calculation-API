import { Request, Response, Router } from 'express';

const router: Router = Router();

router
  .get('/', (req: Request, res: Response) => {
    res.json('hello calc api')
  })
  .get('/add', (req: Request, res: Response) => {
    res.json(req.query)
  })
  .get('/subtract', (req: Request, res: Response) => {
    res.json(req.query)
  })
  .get('/multiply', (req: Request, res: Response) => {
    res.json(req.query)
  })
  .get('/divide', (req: Request, res: Response) => {
    res.json(req.query)
  });

export default router;