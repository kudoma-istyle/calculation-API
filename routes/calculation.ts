import { Request, Response, Router } from 'express';

const router: Router = Router();

// FIX: 冗長なコードを関数に吐きだす
router
  .get('/', (req: Request, res: Response) => {
    res.json('Hello calculation api!!!!!');
  })
  .get('/add', (req: Request, res: Response) => {
    let item1: number = Number(req.query.item1);
    let item2: number = Number(req.query.item2);
    let result: number = item1 + item2;
    res.json({ 'result': result });
  })
  .get('/subtract', (req: Request, res: Response) => {
    let item1: number = Number(req.query.item1);
    let item2: number = Number(req.query.item2);
    let result: number = item1 - item2;
    res.json({ 'result': result });
  })
  .get('/multiply', (req: Request, res: Response) => {
    let item1: number = Number(req.query.item1);
    let item2: number = Number(req.query.item2);
    let result: number = item1 * item2;
    res.json({ 'result': result });
  })
  .get('/divide', (req: Request, res: Response) => {
    let item1: number = Number(req.query.item1);
    let item2: number = Number(req.query.item2);
    let result: number = item1 / item2;
    res.json({ 'result': result });
  });

export default router;