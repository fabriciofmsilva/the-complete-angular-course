export class Like {
  private _status: boolean;

  constructor(private _likes?: number) { }

  Like() {
    this._status ? this._likes += 1 :  this._likes -= 1;
    this._status = !this._status;
  }

  get likes() {
    return this._likes;
  }

  get status() {
    return this._status;
  }
}
