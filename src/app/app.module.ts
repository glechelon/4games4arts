import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post.component';
import { routing } from './app.routes';

import { BlogService } from './blog.service';
import { PostService } from './post.service';




@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PostComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   JsonpModule,
   routing
  ],
  providers: [BlogService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
