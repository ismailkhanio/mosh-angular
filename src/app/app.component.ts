import { Component } from '@angular/core';
import { FavoriteEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  canSave = true;
  // post = {
  //   title: "Title",
  //   isFavorite: true
  // }

  // viewMode = "something"

  // onFavoriteChanged(args: FavoriteEventArgs) {
  //   console.log('Favorite is changed to: ', args);
  // }

  courses: any;

  loadCourses() {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
    ]
  }

  trackCourse(index: any, course: any) {
    return course ? course.id : undefined;
  }

  // onAdd() {
  //   this.courses.push({id: 4, name: "course4"})
  // }

  // onChange(course: any) {
  //   course.name = "Updated"
  // }
}
