/**
 * Created by rishabhshukla on 22/07/17.
 */
import {NextFunction, Request, Response, Router} from "express";
import {BaseRoute} from "./route";
import * as NodeMailer from "nodemailer";

export class IndexRoute extends BaseRoute{

    public static create(router: Router){

        console.log("[IndexRoute::create] Creating index route.");

        router.get('/', (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });

        router.post('/mail', (req: Request, res:Response)=>{
            let transporter = NodeMailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'example@gmail.com', // Your email id
                    pass: 'password' // Your password
                }
            });
        })
    }

    constructor() {
        super();
    }

    public index(req: Request, res: Response, next: NextFunction) {
        //set custom title
        this.title = "Home | Mailer";

        //set options
        let options: Object = {
            "message": "Welcome to Mailer"
        };

        //render template
        this.render(req, res, "index", options);
    }
}