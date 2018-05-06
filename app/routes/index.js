const appRoutes = require('./app_routes');

module.exports = function (app, db) {
    appRoutes(app, db);
        // other route groups could go here, in the future
};