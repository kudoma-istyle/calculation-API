"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router
    .get('/', function (req, res) {
    res.json('Hello calculation api!!!!!');
})
    .get('/add', function (req, res) {
    var item1 = Number(req.query.item1);
    var item2 = Number(req.query.item2);
    var result = item1 + item2;
    res.json({ 'result': result });
})
    .get('/subtract', function (req, res) {
    res.json(req.query);
})
    .get('/multiply', function (req, res) {
    res.json(req.query);
})
    .get('/divide', function (req, res) {
    res.json(req.query);
});
exports.default = router;
//# sourceMappingURL=calculation.js.map