const sseController = require("../controllers/sse.controller.js");
const controller = require("../controllers/numberToRomain.contoller.js");
module.exports = app => {
    // add sse configuration
    app.use(sseController.sse);
    // create sse routes
    let router = require("express").Router();
    router.get("/", controller.initSSE);
    router.post("/numberToRomain", controller.numberToRomainSSE);
    app.use("/sse", router);
};