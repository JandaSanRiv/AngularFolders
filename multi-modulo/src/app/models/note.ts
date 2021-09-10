export class Note {
  _id:string;
  title:string;
  content:string;
  createdAt:Date;
  updatedAt:Date;

  constructor(id:string, title:string, content:string, createdAt:Date, updatedAt:Date){
    this._id = id;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
