const mongoose = require('mongoose')
const Schema = mongoose.Schema

const therapySchema = new Schema({
       therapy_name: {
                type: String,
                required: true
       },
       start_date: {
               type: Date,
               required: true
       },
       end_date: {
               type: Date,
               required: true
       },
       medicine: {
               type: String,
               required: true
       },
       rhythm: {
               type: String,
               required: true
       },  
       details: [
           {
                take_time: String,
                portions: String,
                meal: String
           },
       ]
}, { timestamps: true })

const Therapy = mongoose.model('Therapy', therapySchema)

module.exports = Therapy