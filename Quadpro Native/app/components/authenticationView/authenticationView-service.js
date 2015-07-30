'use strict';
var _,

    _consts,
    dataService = require('../../dataProviders/defaultProvider'),
    localSettings = require('application-settings'),
    // additional requires

    consts;

function Service() {}

_consts = {
    accessTokenKey: 'accessToken'
};

function validateArgs(args) {
    if (!args.email) {
        throw new Error('Service: login - missing email');
    }

    if (!args.password) {
        throw new Error('Service: login - missing password');
    }
}

Service.prototype.signin = function(args, successCallback, errorCallback) {
    validateArgs(args);

    return dataService.Users.login(args.email, args.password)
        .then(function(e) {
            localSettings.setString(_consts.accessTokenKey, e.result.access_token);

            successCallback();
        }, errorCallback);
};

Service.prototype.getCurrentUser = function() {
    return dataService.Users.currentUser();
};

Service.prototype.isAuthenticated = function() {
    return localSettings.getString(_consts.accessTokenKey);
};

Service.prototype.setAuthorization = function() {
    dataService.Users.setAuthorization(localSettings.getString(_consts.accessTokenKey), 'bearer');
};
// additional properties

// START_CUSTOM_CODE_authenticationView
// END_CUSTOM_CODE_authenticationView
module.exports = new Service();