"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var path = require("path");
var errorHandler = require("errorhandler");
var methodOverride = require("method-override");
var index_1 = require("./routes/index");
var Server = (function () {
    function Server() {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        //add routes
        this.routes();
        //add api
        this.api();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.api = function () {
    };
    Server.prototype.config = function () {
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "pug");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cookieParser("SECRET_GOES_HERE"));
        this.app.use(methodOverride());
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
    };
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        //IndexRoute
        index_1.IndexRoute.create(router);
        //use router middleware
        this.app.use(router);
    };
    return Server;
}());
exports.Server = Server;
