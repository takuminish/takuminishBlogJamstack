/**
 * 資格情報モデル
 */
export interface License {

    /** 資格名 */
    name: string;

    /** 取得年月日 */
    passedAt: Date;

    /** true: IT系資格, false: 非IT系資格 */
    isITLicense: boolean;
}