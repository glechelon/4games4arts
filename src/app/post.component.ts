import { Component } from '@angular/core';
import { PostService } from  './post.service';
import { Post } from './post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html'
})
export class PostComponent {

    constructor(private postService: PostService) {
      this.post = postService.getPost();
     }


 }