/**
 * Created by rishabhshukla on 22/07/17.
 */

import {MailerHelper} from "./MailerHelper";

export class MailerFactory {
    public static make(): IMailer {

        return new MailerHelper;
    }
}

export interface IMailer {
    setRecipient(recipient: string): void;
    setSubject(subject: string): void;
    setContent(content: string): void;
    send(): void;
}