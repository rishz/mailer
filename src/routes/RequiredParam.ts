/**
 * Created by rishabhshukla on 22/07/17.
 */

import { NextFunction, Request, Response } from "express";

export function requiredParam(param: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!isParamPresent(param, req)) {
            return res.send(`${param} not provided`);
        }

        next();
    };
}
function isParamPresent(param: string, req: Request): boolean {
    const provided = req.body[param];
    return !(provided === "" || provided === undefined);
}