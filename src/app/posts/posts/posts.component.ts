import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostsService) {
  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      },
      error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value }
    input.value = "";

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response;
        (this.posts as any[]).splice(0, 0, post);
      },
        (error: Response) => {
          if (error.status === 400) {
            // this.form.setErrors(error.json());
          }
          else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
      });
  }

  deletePost(post: any) {
    this.service.deletePost(post.id)
      .subscribe((response: Object) => {
        let index = this.posts.indexOf(post);
        // this.posts.splice(index, 1);
        if (!response.hasOwnProperty(post)) {
          alert('post does not exist')
          console.error(response)
        }
      },
        (error) => {
          alert('unexpected error occured')
          console.log(error)
        });
  }
}
