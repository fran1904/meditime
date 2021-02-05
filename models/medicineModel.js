
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const medicineSchema = new Schema({

       product_name: {
               type: String,
               required: true
       },
       dose: {
               type: String,
               required: true
       },
       drug_type: {
               type: String,
               required: true
       },
       inventory: {
               type: String,
               required: true
       }        
}, { timestamps: true })

const Medicine = mongoose.model('Medicine', medicineSchema)

module.exports = Medicine