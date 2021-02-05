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
app.use(express.urlencoded({ extended: true}))
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

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/login', (req, res) => {
    res.render('login')
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

// Load the index-of-docs page. This is an index page that loops through the DB documents, e.g. blogposts, quotes
app.get('/therapie', (req, res) => {
    Therapy.find()
        .then(data => {
        // res.send(data) Use this to check the data arrives at '/'. Comment out the render method below first!
        res.render('therapie', { Therapys: data })
        })
        .catch(err => console.log(err))
})








// CREATE

// Load the 'create-single-doc' page. The view contains a form with which the user can create a new single document in the database.
app.get('/', (req, res) => {
    // console.log(Medicine)
    Medicine.find()
    .then(result => {
        res.render('medikamente', {Medicines: result})
    })
    .catch(err => console.log(err) )
})

app.get('/neue-medikament', (req, res) => {
    // console.log("hallo")
    Medicine.aggregate([{ $sample: { size: 30 } }])
    .then(result => {
        res.render('neue-medikament', {Medicines: result})
    })
})


// Creates a new DB entry from the frontend with POST
app.post('/neue-medikament', (req, res) => {
    
    const Medicines = new Medicine(req.body)

    Medicines.save()
        .then(result => {
            console.log(req.body)
            res.redirect('/medikamente')
        })
        .catch(err => console.log(err))
})

app.get('/single/:medikamentId',(req,res) => {
    // console.log(req.params.MedikamentId)
    // console.log(params)
    Medicines.findById(req.params.MedikamentId)
    .then(result => {
        res.render('medikamente', {Medikament: result})
    })
    .catch(err => console.log(err))
})





















// Creates a new DB entry from the frontend with POST
app.post('/neue-therapie', (req, res) => {
    const Medicine = new Medicine(req.body)

    Medicine.save()
        .then(result => {
            res.redirect('therapie')
        })
        .catch(err => console.log(err))
})



