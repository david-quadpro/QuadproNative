'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Building List',

    listItems: [],
    // additional properties

});

// START_CUSTOM_CODE_buildingListView
// END_CUSTOM_CODE_buildingListView
module.exports = ViewModel;