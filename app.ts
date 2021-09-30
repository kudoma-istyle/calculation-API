import express, { Express } from 'express';
import calculation from './routes/calculation';

const app: Express = express();

// クライアントのデータを取得する
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ルーティング
app.use('/calculation', calculation);

// 3000番ポートでAPIサーバ起動
app.listen(3000, ()=>{ console.log('Example app listening on port 3000!') })