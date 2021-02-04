const mongoose = require('mongoose')
const Schema = mongoose.Schema

const therapySchema = new Schema({

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
       take_time: {
               type: Date,
               required: true
       },        
       portion: {
               type: Number,
               required: true
       },        
       meal: {
               type: String,
               required: true
       }        
}, { timestamps: true })

const Therapy = mongoose.model('Therapy', therapySchema)

module.exports = Therapy