import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';

/**
 * /blogsのRouting
 */
const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
  },
  {
    path: '**',
    component: BlogsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule { }

