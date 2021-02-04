require('dotenv').config()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user')

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
 
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      console.log(profile);
      User.find({googleId: profile.id})
      .then(user => {
          console.log(user);
          if (user.length > 0) {
              //dann gibt es den User schon
              console.log('User from DB', user)
              done(null, user)
          } else {
              const newUser = new User({
                  userName: profile.displayName,
                  googleId: profile.id,
                  firstName: profile.name.givenName,
                  email: profile.emails[0].value,
                  url_picture: profile.photos[0].value
              })
              newUser.save()
                  .then(user => {
                      console.log('User created', user);
                      done(null, user)
                  })
          }
      })
  
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));
