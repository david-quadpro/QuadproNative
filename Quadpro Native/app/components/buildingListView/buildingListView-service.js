'use strict';
var _,

    _consts,
    dataService = require('../../dataProviders/quadproBackend'),
    // additional requires

    consts;

function Service() {}

function onRequestSuccess(data) {
    return data.result;
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

Service.prototype.getAllRecords = function(args) {
    var expandExp,
        data = dataService.data('Building');

    expandExp = {

        Photo: {
            'SingleField': 'Uri'
        },

    };

    return data.expand(expandExp).get()
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};
// additional properties

// START_CUSTOM_CODE_buildingListView
// END_CUSTOM_CODE_buildingListView
module.exports = new Service();