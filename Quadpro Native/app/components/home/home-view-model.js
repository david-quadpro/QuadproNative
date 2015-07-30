'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Home',
    // additional properties
});

// START_CUSTOM_CODE_home
// END_CUSTOM_CODE_home
module.exports = ViewModel;