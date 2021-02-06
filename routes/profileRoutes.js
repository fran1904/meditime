// const express =require('express')
// const router= express.Router()

// const authCheck = (req, res, next) => {
//     // console.log(req);
//     if (!req.user){
//         res.redirect('/')
//     } else {
//         next()
//     }
 
// }


// router.get('/', authCheck, (req, res) => {
//     // res.render('profile')
//     console.log("Profile:", req.user);
//     res.render('profile', {data: req.user})
//     res.end()
// })

// module.exports= router