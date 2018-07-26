import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses', // courses
  template: `
    <h2>{{ title }}</h2>
    <img [src]="imageUrl" />
    <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'"
      (click)="onSave($event)"
    >Save</button>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = true;
  courses;
  email;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onKeyUp() {
    console.log(this.email);
  }

  onSave($event) {
    $event.stopPropagation();

    console.log('Button was clicked', $event);
  }
}
