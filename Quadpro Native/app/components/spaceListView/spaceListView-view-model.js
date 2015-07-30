'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Space List',

    listItems: [],
    // additional properties

});

// START_CUSTOM_CODE_spaceListView
// END_CUSTOM_CODE_spaceListView
module.exports = ViewModel;