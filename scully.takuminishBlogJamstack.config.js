"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
/** this loads the default render plugin, remove when switching to something else. */
exports.config = {
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
        },
    }
};
