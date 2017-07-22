"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var route_1 = require("./route");
var Mailer_1 = require("../mailer/Mailer");
var RequiredParam_1 = require("./RequiredParam");
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
        router.post("/forgotpw", RequiredParam_1.requiredParam("email"), function (req, res) {
            var email = req.body.email;
            var password_change_code = Math.floor(Math.random() * 900000) + 100000;
            res.send({ status: "success" });
            // Send the code to the user by email
            var mailer = Mailer_1.MailerFactory.make();
            mailer.setRecipient(email);
            mailer.setSubject("Zappel - Your password reset code");
            mailer.setContent("Your Password Reset code is: " + password_change_code + ".");
            mailer.send();
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
