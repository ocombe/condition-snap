var SRError = require('@semantic-release/error');

module.exports = function(pluginConfig, params, cb) {
    if(params.env.SNAP_CI !== 'true') {
        return cb(new SRError('semantic-release didn’t run on Snap CI and therefore a new version won’t be published.\n'
            + 'You can customize this behavior using "verifyConditions" plugins: git.io/sr-plugins',
            'ENOSNAP'));
    }

    if(params.env.hasOwnProperty('SNAP_PULL_REQUEST_NUMBER') && params.env.SNAP_PULL_REQUEST_NUMBER) {
        return cb(new SRError('This test run was triggered by a pull request and therefore a new version won’t be published.',
            'EPULLREQUEST'));
    }

    if(params.options.branch !== params.env.SNAP_BRANCH) {
        return cb(new SRError('This test run was triggered on the branch ' + params.env.SNAP_BRANCH + ', while semantic-release is configured to only publish from ' + params.options.branch + '.\n'
            + 'You can customize this behavior using the "branch" option: git.io/sr-options',
            'EBRANCHMISMATCH'));
    }
};