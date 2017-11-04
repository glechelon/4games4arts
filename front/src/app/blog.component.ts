import { Component } from '@angular/core';
import { BlogService } from  './blog.service';
import { Post } from './post';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent { 


  constructor(private blogService: BlogService) {
    this.posts = blogService.getPosts();
   }



}