
var adminRouter = require('../admin/adminRoute')
// var userRouter = require('../user/userRoute')

module.exports = function (app) {
	app.use('/demo/api/admin', adminRouter);
	// app.use('/demo/api/user', userRouter);

}
