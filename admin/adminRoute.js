
var adminRouter = require('express').Router()
var adminService = require('./adminService')

adminRouter.route("/getdata")
    .get((req, res) => {
        adminService.getdata(req, res)
    });

adminRouter.route("/create")
    .post((req, res) => {
        adminService.createdata(req, res)
    });
adminRouter.route("/userlist")
    .post((req, res) => {
        adminService.getdata(req, res)
    });

module.exports = adminRouter;