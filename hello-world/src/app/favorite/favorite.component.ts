import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isFavorite = false;

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onFavoriteClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }

}
