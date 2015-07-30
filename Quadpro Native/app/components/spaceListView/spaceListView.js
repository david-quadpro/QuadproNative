'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),

    service = require('./spaceListView-service'),
    // additional requires

    viewModel = require('./spaceListView-view-model');

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

                    header: item.Code,

                    description: item.Name,

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

// START_CUSTOM_CODE_spaceListView
// END_CUSTOM_CODE_spaceListView
exports.pageLoaded = pageLoaded;