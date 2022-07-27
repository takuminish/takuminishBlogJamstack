import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';
import { removeScripts, RemoveScriptsConfig } from '@scullyio/scully-plugin-remove-scripts';

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite, removeScripts];
setPluginConfig(baseHrefRewrite, { href: '/takuminishBlogJamstack/' });
setPluginConfig<RemoveScriptsConfig>(removeScripts, {
  keepTransferstate: false,
  keepAttributes: []
});

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "takuminishBlogJamstack",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/home': {
      type: 'default',
      postRenderers: [removeScripts],
    },
    '/': {
      type: 'default',
      postRenderers: [removeScripts],
    },
    '/blogs': {
      type: 'default',
      postRenderers: [removeScripts],
    },
    '/blog/:slug': {
      type: 'contentFolder',
      postRenderers: [removeScripts],
      slug: {
        folder: "./blog"
      }
    }
  },
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid--sandbox'],
  },
};