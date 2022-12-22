import express from 'express';
const routes = express.Router();

routes.use('/assets', express.static(__dirname + '/assets'));

module.exports = routes;