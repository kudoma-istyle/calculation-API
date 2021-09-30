"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var calculation_1 = __importDefault(require("./routes/calculation"));
var app = (0, express_1.default)();
// クライアントのデータを取得する
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// ルーティング
app.use('/calculation', calculation_1.default);
// 3000番ポートでAPIサーバ起動
app.listen(3000, function () { console.log('Example app listening on port 3000!'); });
