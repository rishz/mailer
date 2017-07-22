import * as express from "express"
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import { IndexRoute } from "./routes/index";

export class Server{
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        //create expressjs application
        this.app = express();

        //configure application
        this.config();

        //add routes
        this.routes();

        //add api
        this.api();
    }

    public api() {
    }

    public config() {
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("views", path.join(__dirname,"views"));
        this.app.set("view engine","pug");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cookieParser("SECRET_GOES_HERE"));
        this.app.use(methodOverride());
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
    }

    public routes() {
        let router: express.Router;
        router = express.Router();

        //IndexRoute
        IndexRoute.create(router);

        //use router middleware
        this.app.use(router);
    }
}