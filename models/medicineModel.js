
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const medicineSchema = new Schema({

       product_name: {
               type: String,
               required: false
       },
       dose: {
               type: String,
               required: false
       },
       drug_type: {
               type: String,
               required: false
       },
       inventory: {
               type: String,
               required: false
       }        
}, { timestamps: true })

const Medicine = mongoose.model('Medicine', medicineSchema)

module.exports = Medicine