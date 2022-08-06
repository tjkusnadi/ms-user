const users = require('./users');

const routers = [
  ...users
];

module.exports = (app) => {
  routers.forEach(router => app.use(router));
};