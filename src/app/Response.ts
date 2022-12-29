export class ChatResponse {
    response: String;
    type: Type | undefined;

    constructor(rspns: String) {
        this.response = rspns;
    }

    setType(type: Type){
        this.type = type;
    }
}

export enum Type {
    USER,
    BOT
  }