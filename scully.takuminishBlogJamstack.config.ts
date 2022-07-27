import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';
import { removeScripts, RemoveScriptsConfig } from '@scullyio/scully-plugin-remove-scripts';

const defaultPostRenderers = ['seoHrefOptimise'];
setPluginConfig<RemoveScriptsConfig>(removeScripts, {
  keepTransferstate: false,
  keepAttributes: []
});
setPluginConfig(baseHrefRewrite, { href: '/' });

export const config: ScullyConfig = {
  defaultPostRenderers,
  projectRoot: "./src",
  projectName: "takuminishBlogJamstack",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/home': {
      type: 'default',
      postRenderers: [removeScripts, baseHrefRewrite],
      baseHref: '/takuminishBlogJamstack/',

    },
    '/': {
      type: 'default',
      postRenderers: [removeScripts, baseHrefRewrite],
      baseHref: '/takuminishBlogJamstack/',
    },
    '/blogs': {
      type: 'default',
      postRenderers: [removeScripts, baseHrefRewrite],
      baseHref: '/takuminishBlogJamstack/',
    },
    '/blog/:slug': {
      type: 'contentFolder',
      postRenderers: [removeScripts, baseHrefRewrite],
      baseHref: '/takuminishBlogJamstack/',
      slug: {
        folder: "./blog"
      }
    }
  },
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid--sandbox'],
  },
};