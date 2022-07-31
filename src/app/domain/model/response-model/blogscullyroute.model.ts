import { ScullyRoute } from "@scullyio/ng-lib";

export class BlogScullyRoute implements ScullyRoute {
    [prop: string]: any;
    route: string;
    title?: string | undefined;
    slugs?: string[] | undefined;
    published?: boolean | undefined;
    slug?: string | undefined;
    sourceFile?: string | undefined;
    lang?: string | undefined;

    constructor() {
        this.route = ''
    }
}