import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  
    getPost() : post{
      
      const post : post = {id: "1", date:"03/11/2017", title: "premier post", author:"jppdetoi" image: "", teaser: "this is a teaser", content: "this is a content" };
      
      return post;
    }
}