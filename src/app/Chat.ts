export class Chat {
    content: String;
    dateTime: Date

    constructor(cnt: String, dt: Date) {
        this.content = cnt;
        this.dateTime = dt;
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