require('dotenv').config()
let express = require('express')
let app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const Medicine = require('./models/medicineModel')
const Therapy = require('./models/therapyModel')

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('Connected to my DB')
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    })
    .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
app.use(express.static('./public'))
app.set('view engine', 'ejs');   
// Add 404 here...

// ROUTES AND REQUEST HANDLING GO HERE- CUSTOMISE AND UN-COMMENT

// Load the homepage
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})


// Load the index-of-docs page. This is an index page that loops through the DB documents, e.g. blogposts, quotes
app.get('/medikamente', (req, res) => {
    Medicine.find()
        .then(data => {
        // res.send(data) Use this to check the data arrives at '/'. Comment out the render method below first!
        res.render('medikamente', { Medicines: data })
        })
        .catch(err => console.log(err))
})




// Load the 'create-single-doc' page. The view contains a form with which the user can create a new single document in the database.
app.get('/neue-medikament', (req, res) => {
    res.render('neue-medikament')
})

// Create a new DB entry from the frontend with POST
app.post('/neue-medikament', (req, res) => {
    const newMedicine = new Medicine(req.body)

    newMedicine.save()
        .then(result => {
            res.redirect('medikamente')
        })
        .catch(err => console.log(err))
})

app.get('/single-med/:id', (req, res) => {
    Medicine.findById(req.params.id)
         .then(data => {
             res.render('single-med', { Medicine: data })    // Note that you DON'T need to include /:id in this line
         })
         .catch(err => console.log(err))
 }) 

app.delete('/delete/:id', (req, res) => {
    Medicine.findByIdAndDelete(req.params.id)
        .then(result => res.redirect('/medikamente'))
        .catch(err => console.log(err))
})    


app.get('/update-medikament/:id', (req, res) => {
    Medicine.findById(req.params.id)
         .then(data => {
             res.render('update-medikament', { Medicine: data })   // Note that you DON'T need to include /:id in this line
         })
         .catch(err => console.log(err))
 })

 app.post('/update-medikament/:id', (req, res) => {
    Medicine.findByIdAndUpdate(req.params.id, req.body)
        .then(result => res.redirect(`/single-med/${req.params.id}`))    // Note: With res.redirect(), you need to use template literals!!!
        .catch(err => console.log(err))
})    






// ################# THERAPY SECTION ################# //


// Load the index-of-docs page. This is an index page that loops through the DB documents, e.g. blogposts, quotes
app.get('/therapie', (req, res) => {
    Therapy.find()
        .then(data => {
        // res.send(data) Use this to check the data arrives at '/'. Comment out the render method below first!
        res.render('therapie', { Therapys: data })
        })
        .catch(err => console.log(err))
})

 // Creates a new DB entry from the frontend with POST
app.post('/neue-therapie', (req, res) => {
    const newTherapy = new Therapy(req.body)

    newTherapy.save()
        .then(result => {
            res.redirect('therapie')
        })
        .catch(err => console.log(err))
})