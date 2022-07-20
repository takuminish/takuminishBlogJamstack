import { MicroCMSImage } from "microcms-js-sdk";

/**
 * 成果物モデル
 */
export interface Product {

    /** 成果物名 */
    name: string;

    /** 詳細情報 */
    detailedInfomation: string;

    /** 使用技術一覧 */
    useSkills: string[];

    /** 成果物画像 */
    productImage: MicroCMSImage;

}