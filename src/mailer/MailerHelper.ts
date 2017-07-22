/**
 * Created by rishabhshukla on 22/07/17.
 */

import { AbstractMailer } from "./AbstractMailer";

export class MailerHelper extends AbstractMailer {
    public send() {
        console.log(`Email sent by mock mailer to ${this.recipient}`);
    }
}