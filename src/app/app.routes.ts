import { NgModule } from '@angular/core';
import { ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog.component';
import {PostComponent} from './post.component';

export const routes: Routes = [
  {path : '', redirectTo : '/blog', pathMatch : 'full'},
  {path : 'blog', component : BlogComponent},
  {path : 'post/:id', component : PostComponent}
  //  { path: 'signUp', component: SignUpComponent },
  //  { path : 'signIn', component: signInComponent}
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ],
})
export class AppRoutingModule {
}

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);