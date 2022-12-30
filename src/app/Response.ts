export class ChatResponse {
    response: String;
    type: Type | undefined;
    cards: Card[] | undefined;

    constructor(rspns: String, cards?: Card[]) {
        this.response = rspns;
        this.cards = cards;
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