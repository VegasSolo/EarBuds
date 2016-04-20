// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var SpotifyStrategy = require('passport-spotify').Strategy;

// load up the user model
var User            = require('../app/models/user');

// load the auth variables
var configAuth = require('./auth');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    
    // =========================================================================
    // Spotify =================================================================
    // =========================================================================
    passport.use(new SpotifyStrategy({
    
            // pull in our app id and secret from our auth.js file
            clientID        : configAuth.spotifyAuth.clientID,
            clientSecret    : configAuth.spotifyAuth.clientSecret,
            callbackURL     : configAuth.spotifyAuth.callbackURL,
            passReqToCallback : true // allows us to pass back the entire request to the callback    
        },
    
        // spotify will send back the token and profile
        function(req, token, refreshToken, profile, done) {
    
            // asynchronous
            process.nextTick(function() {
                
                // check if the user is already logged in
                if (!req.user) {
    
                // find the user in the database based on their spotify id
                    User.findOne({ 'spotify.id' : profile.id }, function(err, user) {
        
                        // if there is an error, stop everything and return that
                        // ie an error connecting to the database
                        if (err)
                            return done(err);
        
                        // if the user is found, then log them in
                        if (user) {
                            // if there is a user id already but no token (user was linked at one point and then removed)
                            // just add our token and profile information                            
                            if (!user.spotify.token) {
                                user.spotify.token = token;
                                user.spotify.name  = profile.display_name;
                                user.spotify.email = profile.email;
    
                                user.save(function(err) {
                                    if (err)
                                        throw err;
                                    return done(null, user);
                                });
                            }
                            
                            return done(null, user); // user found, return that user
                        } else {
                            // if there is no user found with that spotify id, create them
                            var newUser            = new User();
        
                            // set all of the spotify information in our user model
                            newUser.spotify.id    = profile.id; // set the users spotify id                   
                            newUser.spotify.token = token; // we will save the token that spotify provides to the user                    
                            newUser.spotify.name  = profile.display_name;
                            newUser.spotify.email = profile.email;
        
                            // save our user to the database
                            newUser.save(function(err) {
                                if (err)
                                    throw err;
        
                                // if successful, return the new user
                                return done(null, newUser);
                            });
                        }
        
                    });
                } else {
                    // user already exists and is logged in, we have to link accounts
                    var user            = req.user; // pull the user out of the session
    
                    // update the current users spotify credentials
                    user.spotify.id    = profile.id;
                    user.spotify.token = token;
                    user.spotify.name  = profile.display_name;
                    user.spotify.email = profile.email;
    
                    // save the user
                    user.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, user);
                    });
                }                   
            });
    
    }));

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.email' :  email }, function(err, user) {
            // filter to check email format
            var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            // check to see if the email is correct format
            } else if(!filter.test(email)){
                return done(null, false, req.flash('signupMessage', 'Email format is incorrect'));
            } else {

                // if there is no user with that email
                // create the user
                var newUser            = new User();

                // set the user's local credentials
                newUser.local.imgurl   = "avatar/default.png";
                newUser.local.email    = email;
                newUser.local.password = newUser.generateHash(password);
                newUser.local.firstname = req.body.firstname;
                newUser.local.lastname = req.body.lastname;
                newUser.local.username = req.body.username;

                // save the user
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });    

        });

    }));
    
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.email' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            return done(null, user);
        });

    }));
    
    // =========================================================================
    // LOCAL EDIT ==============================================================
    // =========================================================================
    // process the information if a user tries to edit his profile info
    
    passport.use('local-edit', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function( req, email, password, done) {
        
        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        User.findOne({ 'local.email' :  email }, function(err, user) {
            
            // if there are any errors, return the error
            if (err){
                return done(err);
            }
            
            // Check to see if password and password2 from form is the same
            if (req.body.password == "empty" && req.body.password2 == "empty"){
                
                user.local.imgurl = req.body.imgurl;
                user.local.username = req.body.username;
                user.local.firstname = req.body.firstname;
                user.local.lastname = req.body.lastname;
                
            } // Check to see if the passwords match
            else if (req.body.password != req.body.password2){
                return done(null, false, req.flash('editMessage', 'Passwords do not match.'));
            } // If the passwords match, update user
            else{
                
                user.local.imgurl = req.body.imgurl;
                user.local.username = req.body.username;
                user.local.firstname = req.body.firstname;
                user.local.lastname = req.body.lastname;
                user.local.password = user.generateHash(req.body.password);
                    
            }
                // save the user
                user.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, user);
                }); 
            }); 
        }); 
    }));
};