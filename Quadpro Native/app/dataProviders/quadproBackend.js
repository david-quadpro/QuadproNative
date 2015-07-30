var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    url: '//platform.telerik.com/bs-api/v1/',

    apiKey: 'NgnQCd7kJ4L3QPhS',
    scheme: 'https'
});

// START_CUSTOM_CODE_quadproBackend
// END_CUSTOM_CODE_quadproBackend
module.exports = provider;