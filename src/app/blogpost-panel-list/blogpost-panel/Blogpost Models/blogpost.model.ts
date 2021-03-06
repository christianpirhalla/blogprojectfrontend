export class Blogpost {
  id: number;
  userName: string;
  title: string;
  imageLink: string;
  blurb: string;
  fullText: string;
  creationTimestamp: string;
  // public updateTimestamp: Date;
  tags: Set<string>;


  constructor(id: number, userName: string, title: string, imageLink: string,
              blurb: string, fullText: string, creationTimestamp: string) {
    this.id = id;
    this.userName = userName;
    this.title = title;
    this.imageLink = imageLink;
    this.blurb = blurb;
    this.fullText = fullText;
    this.creationTimestamp = creationTimestamp;
  }
}
