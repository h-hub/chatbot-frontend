export class Message {
    text: String;
    userId: String | undefined

    constructor(txt: String, usrID?: String) {
        this.text = txt;
        this.userId = usrID;
    }
}