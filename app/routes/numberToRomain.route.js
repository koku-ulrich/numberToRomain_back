module.exports = app => {
    const controller = require("../controllers/numberToRomain.contoller.js");
    let router = require("express").Router();
    router.post("/", controller.numberToRomain);
    app.use("/numberToRomain", router);
};