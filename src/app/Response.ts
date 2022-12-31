import { QuickReply } from "./QuickReply";

export class ChatResponse {
    [x: string]: any;
    response: String;
    type: Type | undefined;
    cards: Card[] | undefined;
    quickReply: QuickReply | undefined;

    constructor(rspns: String, cards?: Card[], quickReply?: QuickReply) {
        this.response = rspns;
        this.cards = cards;
        this.quickReply = quickReply;
    }

    setType(type: Type) {
        this.type = type;
    }

    setCards(cards: Card[]){
        this.cards = cards;
    }
}

export class Card {
    header: String;
    description: String;
    imageUrl: URL;
    link: URL;

    constructor(
        header: String,
        description: String,
        imageUrl: URL,
        link: URL) {
        this.header = header;
        this.description = description;
        this.imageUrl = imageUrl;
        this.link = link;
    }
}

export enum Type {
    USER,
    BOT
}