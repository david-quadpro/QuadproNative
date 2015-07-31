'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),

    service = require('./buildingListView-service'),
    // additional requires

    viewModel = require('./buildingListView-view-model');

// additional functions

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;

    service.getAllRecords()
        .then(function(result) {
            var itemsList = [];

            result.forEach(function(item) {
                itemsList.push({

                    icon: '~/images/icons/globe.png',

                    image: item.Name,

                    header: item.Name,

                });
            });

            viewModel.set('listItems', itemsList);
        });
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}

// START_CUSTOM_CODE_buildingListView
// END_CUSTOM_CODE_buildingListView
exports.pageLoaded = pageLoaded;