'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),

    service = require('./authenticationView-service'),
    // additional requires

    viewModel = require('./authenticationView-view-model');

function validateData(data) {
    if (!data.email) {
        alert('Missing email');
        return false;
    }

    if (!data.password) {
        alert('Missing password');
        return false;
    }

    return true;
}

function authError(error) {
    if (error) {
        if (error.message) {
            alert(error.message);
        }

        return false;
    }
}

function signinSuccess() {
    helpers.navigate('components/home/home');
}

function onSignin(data) {
    if (validateData(data)) {
        data.email = data.email.toLowerCase();
        service.signin(data, signinSuccess, authError);
    }
}

// additional functions

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        viewModel.on(viewModel.events.signin, onSignin);

        // additional pageInit

    }
}

// START_CUSTOM_CODE_authenticationView
// END_CUSTOM_CODE_authenticationView
exports.pageLoaded = pageLoaded;