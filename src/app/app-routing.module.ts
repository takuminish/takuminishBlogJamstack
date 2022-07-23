import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'blog', loadChildren: () => import('./presentation/components/blog/blog.module').then(m => m.BlogModule) },
  { path: 'blogs', loadChildren: () => import('./presentation/components/blogs/blogs.module').then(m => m.BlogsModule) },
  { path: '', loadChildren: () => import('./presentation/components/top/top.module').then(m => m.TopModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
