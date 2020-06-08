const mongoose = require('mongoose')
const adminConst = require("./adminConst");
const adminModel = require('../schema/admin');
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


function getdata(req, res) {
    console.log("in admin service", req.body.username, req.body.password)
    adminModel.findOne({ "userName": req.body.username }, async (err, data) => {
        if (data) {
            const match = await bcrypt.compare(req.body.password, data.password);
            if (match) {
                if (data.role == 'ADMIN') {
                    adminModel.find({ role: 'USER' }, (err, respn) => {
                        if (err) {
                            return res.json({ status: false, message: adminConst.MESSAGE.internalServerError, err: err })
                        }
                        else {
                            return res.json({ status: true, message: adminConst.MESSAGE.success, data: respn })
                        }
                    })
                }
                else {
                    return res.json({ status: false, statusCode: adminConst.STATUS_CODE.FAILURECASE, message: adminConst.MESSAGE.unauthorized })
                }
            }
            else {
                return res.json({ status: false, statusCode: adminConst.STATUS_CODE.FAILURECASE, message: adminConst.MESSAGE.incorrectpassword })
            }
        }
        else {
            return res.json({ status: false, statusCode: adminConst.STATUS_CODE.FAILURECASE, message: adminConst.MESSAGE.recordNotFound })
        }
    });
}

function createdata(req, res) {
    console.log("req.body", req.body)
    var pass = bcrypt.hashSync(req.body.password, 10)
    req.body.password = pass;
    var admin = new adminModel(req.body)
    admin.save((err, respn) => {
        if (err) {
            return res.json({ status: false, message: adminConst.MESSAGE.internalServerError, err: err })
        }
        else {
            return res.json({ status: true, message: adminConst.MESSAGE.success, data: respn })
        }
    })
}
function login(req, res) {

    adminModel.findOne({ "useName": req.body.userName }, async (err, data) => {

        if (data) {
            const match = await bcrypt.compare(req.body.password, data.password);

            if (match) {
                let tokn = util.generateToken(data, "nami996joshi@gmail.com")
                var response = {
                    data,
                    token: tokn
                }
                return res.json({ data: response, status: true, statusCode: adminConst.STATUS_CODE.SUCCESSCASE, message: adminConst.MESSAGE.loginSuccess })
            }
            else {
                return res.json({ status: false, statusCode: adminConst.STATUS_CODE.FAILURECASE, message: adminConst.MESSAGE.incorrectpassword })
            }
        }
        else {
            return res.json({ status: false, statusCode: adminConst.STATUS_CODE.FAILURECASE, message: adminConst.MESSAGE.recordNotFound })
        }
    });
}
module.exports = {
    getdata,
    createdata
}
