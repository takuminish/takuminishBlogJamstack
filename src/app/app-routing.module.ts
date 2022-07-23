import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: 'blog', loadChildren: () => import('./presentation/components/blog/blog.module').then(m => m.BlogModule),
    data: {
      seo: {
        title: `Blog | takuminish's Portfolio`,
        metaTags: [
          { name: 'description', content: 'Blog' },
          { property: 'og:title', content: `Blog | takuminish's Portfolio` },
          { proprety: 'og:description', content: `Blog` },
          { property: 'og:image', content: `${environment.url}/assets/images/takuminish-portfolio-blog-ogp.png` },
          { property: 'og:url', content: `${environment.url}/blog` },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      }
    }
  },
  {
    path: 'blogs', loadChildren: () => import('./presentation/components/blogs/blogs.module').then(m => m.BlogsModule),
    data: {
      seo: {
        title: `Blogs | takuminish's Portfolio`,
        metaTags: [
          { name: 'description', content: 'Blogs' },
          { property: 'og:title', content: `Blogs | takuminish's Portfolio` },
          { proprety: 'og:description', content: `Blogs` },
          { property: 'og:image', content: `${environment.url}/assets/images/takuminish-portfolio-blogs-ogp.png` },
          { property: 'og:url', content: `${environment.url}/blogs` },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      }
    }
  },
  {
    path: '', loadChildren: () => import('./presentation/components/top/top.module').then(m => m.TopModule),
    data: {
      seo: {
        title: `Top | takuminish's Portfolio`,
        metaTags: [
          { name: 'description', content: 'takuminishのポートフォリオ+個人ブログサイトです。経歴やスキル、取得済み資格等をまとめています。' },
          { property: 'og:title', content: `Top | takuminish's Portfolio` },
          { proprety: 'og:description', content: `takuminishのポートフォリオ+個人ブログサイトです。経歴やスキル、取得済み資格等をまとめています。` },
          { property: 'og:image', content: `${environment.url}/assets/images/takuminish-portfolio-ogp.png` },
          { property: 'og:url', content: `${environment.url}` },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
