const mongoose = require('mongoose');
// var mongoosePaginate = require('mongoose-paginate');

const schema = mongoose.Schema;

var AdminSchema = new schema({
    isActive:
    {
        type: Boolean, default: true
    },
    userName: { type: String,unique:true },
    middleName: { type: String },
    lastName: { type: String },
    password: { type: String },
    role: { type: String, required: true, enum: ['ADMIN', 'USER']},
    
});

// companySchema.plugin(mongoosePaginate)

module.exports = mongoose.model("admindemo", AdminSchema)