// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'spotifyAuth' : {
        'clientID'      : 'bf0bab1fc5bd47309d593a087928d05b', // your App ID
        'clientSecret'  : '1590548fd1ca4f2f9be23d102ab22aa1', // your App Secret
        'callbackURL'   : 'https://'+'seproject-ezimkin.c9users.io'+'/auth/spotify/callback' // CHANGE TO YOUR OWN URL
    },

};