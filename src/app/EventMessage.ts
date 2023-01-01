export class EventMessage {
    event: String;
    userId: String | undefined

    constructor(evnt: String, usrID?: String) {
        this.event = evnt;
        this.userId = usrID;
    }
}