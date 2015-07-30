'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    backButtonHidden: true,

    pageTitle: 'Log in',

    email: '',
    password: '',

    events: {
        signin: 'signin'
    },

    onSignin: function() {
        this.notify({
            eventName: this.events.signin,
            email: this.get('email'),
            password: this.get('password')
        });
    },

    // additional properties

});

// START_CUSTOM_CODE_authenticationView
// END_CUSTOM_CODE_authenticationView
module.exports = ViewModel;