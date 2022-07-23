import { ScullyConfig } from '@scullyio/scully';



export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "takuminishBlogJamstack",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    }
  },
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid--sandbox'],
  },
};