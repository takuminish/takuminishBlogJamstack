/** 
 * 経歴モデル 
 */
export interface Experience {
    /** タイトル*/
    title: string;

    /** 開始日 */
    startAt: Date;

    /** 終了日 */
    endAt: Date;

    /** 詳細情報 */
    detailedInformation: string;
}