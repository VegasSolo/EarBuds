// app/routes.js
var server = require('../server.js');
var User = require('./models/user.js');

module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/main', function(req, res) {
		res.render('index.ejs'); // load the index.ejs file
	});
	
	//check when someone tries to visit the main page to see if they are already logged in
	app.get('/', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', isLoggedInProfile, function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/login',passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', isLoggedInProfile, function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	function fetchFave (email, cb) {
		server.connection.query('select Bands from favorite where User = "'+email+'"',
		function(err, rows) {
			if (err) cb(err, null);
			else if (typeof rows[0] === 'undefined') cb(null, "");
			else cb(null, rows[0].Bands);
		});
	}

	function fetchFollow (email, cb) {
		server.connection.query('select following from follow where User = "'+email+'"',
		function(err, rows) {
			if (err) cb(err, null);
			else if (typeof rows[0] === 'undefined') cb(null, "");
			else cb(null, rows[0].following);
		});
	}
	
	//load user's own profile
	app.get('/profile', isLoggedIn, function(req, res) {
		fetchFave(req.user.local.email, function(err, bands) {
				if (err) throw err;
				
				bands = bands.substr(1);
				var array = bands.split(",");
				
				fetchFollow(req.user.local.email, function(err, follow) {
					if (err) throw err;	
				
					follow = follow.substr(1);
					var array2 = follow.split(",");
					
					res.render('profile.ejs', { 
						user : req.user, 
						favorites : array,
						follows : array2,
						message : req.flash('editMessage')
					});
				});
		});
	});
	
	//check if still logged in and process user edit information
	app.post('/editUser', passport.authenticate('local-edit', {
		successRedirect : '/profile',
		failureRedirect : '/profile',
		failureFlash : true
	}));
	
	//change the profile image
	app.post('/imgUsr', passport.authenticate('local-edit', {
		successRedirect : '/profile',
		failureRedirect : '/profile',
		failureFlash : true
	}));
	
	// =====================================
	// PUBLIC PROFILE SECTION ==============
	// =====================================
	// load another user's profile
	
	app.get('/user', isLoggedIn, 
	function(req, res) {
        User.findOne({ 'local.username' :  req.query.user2 }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err) throw err;
            // if no user is found, return the message
            else if (!user) user = "%%%";
            // return successful user
            var email;
	            if(user == "%%%"){
	            	email = req.user.local.email;
	            }
	            else{
	            	email = user.local.email;
	            }
	            
			fetchFave(email, function(err, bands) {
				if (err) throw err;
				
				bands = bands.substr(1);
				var array = bands.split(",");
				
				fetchFollow(email, function(err, follow) {
					if (err) throw err;	
				
					follow = follow.substr(1);
					var array2 = follow.split(",");
					
					if (user == '%%%'){
						res.render('profile.ejs', { 
							user : req.user,
							favorites : array,
							follows : array2,
							message : 'User is not in database'
						});
			        }
			        else if (typeof user.local === 'undefined'){
			 			res.render('profile.ejs', { 
							user : req.user,
							favorites : array,
							follows : array2,
							message : 'User is of type "undefined"'
						});       	
			        }
			        else{
			 			res.render('user.ejs', { 
							user : req.user,
							user2 : user,
							follows : array2,
							favorites : array
						});       	
			        } 
				});
        	});
		});
	});
	
	app.get('/follow', isLoggedIn,
	function(req, res) {
	    //Create follow
		server.connection.query('INSERT INTO follow (ID,User,following) SELECT * FROM ( SELECT null,"'+req.user.local.email+'",",'+req.query.follow+'") AS tmp WHERE NOT EXISTS (SELECT User FROM follow WHERE User = "'+req.user.local.email+'") LIMIT 1',
		function(err){
		    if (err) throw err;
		});
		//Update follows and check user already following
		server.connection.query('UPDATE follow SET following = CONCAT(following, ",'+req.query.follow+'") WHERE User = "'+req.user.local.email+'" AND following NOT LIKE "%'+req.query.follow+'%"',
		function(err) {
			if(err) throw err;
		});
	
		res.redirect('/profile');		
	});
	
	//Remove the artist from user's liked artists if exists
	app.get('/unfollow', function(req,res){
		//Remove following
		server.connection.query('UPDATE follow SET following = REPLACE(following, ",'+req.query.unfollow+'", "") WHERE User = "'+req.user.local.email+'"',
		function(err) {
			if(err) throw err;
		});
	
		res.redirect('/profile');
	});
	
	// =====================================
	// ARTIST ==============================
	// =====================================
	
	app.get('/artist', function(req, res) {
		res.render('artist.ejs', { 
			user : req.user, 
			typeahead : req.query.typeahead
		});
	});
	
	//Search DB for artist
	app.get('/search',function(req,res){
		server.connection.query('select Name from artist where Name like "%'+req.query.key+'%"',
		function(err, rows, fields) {
			if (err) throw err;
			var data=[];
			for(var i=0;i<rows.length;i++) {
				data.push(rows[i].Name);
			}
			res.end(JSON.stringify(data));
		});
	});
	
	//Add artist to user's liked artists
	app.get('/fave', function(req,res){
	    //Create fave
		server.connection.query('INSERT INTO favorite (ID,User,Bands) SELECT * FROM ( SELECT null,"'+req.user.local.email+'",",'+req.query.fave+'") AS tmp WHERE NOT EXISTS (SELECT User FROM favorite WHERE User = "'+req.user.local.email+'") LIMIT 1',
		function(err){
		    if (err) throw err;
		});
		//Update faves and check if artist is already favorited
		server.connection.query('UPDATE favorite SET Bands = CONCAT(Bands, ",'+req.query.fave+'") WHERE User = "'+req.user.local.email+'" AND Bands NOT LIKE "%'+req.query.fave+'%"',
		function(err) {
			if(err) throw err;
		});
	
		res.render('artist.ejs', { 
			user : req.user, 
			typeahead : req.query.fave
		});
	});
	
	//Remove the artist from user's liked artists if exists
	app.get('/unfave', function(req,res){
		//Remove favorite band
		server.connection.query('UPDATE favorite SET Bands = REPLACE(Bands, ",'+req.query.unfave+'", "") WHERE User = "'+req.user.local.email+'"',
		function(err) {
			if(err) throw err;
		});
	
		res.render('artist.ejs', { 
			user : req.user, 
			typeahead : req.query.unfave
		}); 
	});
	
	// =====================================
    // SPOTIFY ROUTES =====================
    // =====================================
    // route for spotify authentication and login
	app.get('/auth/spotify', passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private']}));
	
    // handle the callback after spotify has authenticated the user
    app.get('/auth/spotify/callback',
        passport.authenticate('spotify', {
            successRedirect : '/profile',
            failureRedirect : '/profile'
     }));
     
    // =============================================================================
	// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
	// =============================================================================

    // locally --------------------------------
    app.get('/connect/local', function(req, res) {
        res.render('connect-local.ejs', { message: req.flash('loginMessage') });
    });
    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    app.get('/unlink/local', function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
        	if (err) throw err;
            res.redirect('/profile');
        });
	});

    // spotify -------------------------------

    // send to spotify to do the authentication
    app.get('/connect/spotify', passport.authorize('spotify', {scope: ['user-read-email', 'user-read-private']}));

    // handle the callback after spotify has authorized the user
    app.get('/connect/spotify/callback',
        passport.authorize('spotify', {
            successRedirect : '/profile',
            failureRedirect : '/profile'
    }));
    
     // spotify -------------------------------
    app.get('/unlink/spotify', function(req, res) {
        var user            = req.user;
        user.spotify.token = undefined;
        user.save(function(err) {
        	if (err) throw err;
            res.redirect('/profile');
        });
    });

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/main');
}

// route user to profile page instead of requested page if logged in
function isLoggedInProfile(req, res, next) {

	if (req.isAuthenticated())
		res.redirect('/profile');
	else
		return next();
}