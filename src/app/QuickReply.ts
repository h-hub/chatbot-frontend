export class QuickReply {
    text: String;
    replies: Reply[]

    constructor(txt: String, rpls: Reply[]) {
        this.text = txt;
        this.replies = rpls;
    }
}

export class Reply{
    text: String;
    payload: String;

    constructor(txt: String, pyld: String) {
        this.text = txt;
        this.payload = pyld;
    }
}