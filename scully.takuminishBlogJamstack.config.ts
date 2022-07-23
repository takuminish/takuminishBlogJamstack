import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite];
setPluginConfig(baseHrefRewrite, { href: '/takuminishBlogJamstack/' });


export const config: ScullyConfig = {
  defaultPostRenderers,
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