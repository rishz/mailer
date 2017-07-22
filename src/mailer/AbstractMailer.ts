/**
 * Created by rishabhshukla on 22/07/17.
 */

export abstract class AbstractMailer {
    protected sender = "zailer@zappel.io";
    protected recipient: string;
    protected subject: string;
    protected content: string;

    public setRecipient(recipient: string): void {
        this.recipient = recipient;
    }

    public setSubject(subject: string): void {
        this.subject = subject;
    }

    public setContent(content: string): void {
        this.content = content;
    }
}