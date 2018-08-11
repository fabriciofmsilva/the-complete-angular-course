import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  post = {
    title: 'Title',
    isFavorite: true
  };
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  };
  coursesIf = [1, 2];
  viewMode = 'map';
  courses = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' }
  ];

  onFavoriteChange(eventsArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed: ', eventsArgs);
  }
}
