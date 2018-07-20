export class LikeComponent {

  constructor(public likesCount: number, public isSelected: boolean) { }

  onClick() {
    this.likesCount += (this.likesCount) ? -1 : 1;
    this.isSelected = !this.isSelected;
  }
}
