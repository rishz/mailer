"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var route_1 = require("./route");
var IndexRoute = (function (_super) {
    __extends(IndexRoute, _super);
    function IndexRoute() {
        _super.call(this);
    }
    IndexRoute.create = function (router) {
        console.log("[IndexRoute::create] Creating index route.");
        router.get('/', function (req, res, next) {
            new IndexRoute().index(req, res, next);
        });
    };
    IndexRoute.prototype.index = function (req, res, next) {
        //set custom title
        this.title = "Home | Mailer";
        //set options
        var options = {
            "message": "Welcome to Mailer"
        };
        //render template
        this.render(req, res, "index", options);
    };
    return IndexRoute;
}(route_1.BaseRoute));
exports.IndexRoute = IndexRoute;
