/**
 * スキル(技術等)モデル
 */
export interface Skill {
    /** スキル名 */
    name: string;

    /** カテゴリ */
    category: string;

    /** 詳細情報 */
    detailedInfomation: string;

    /** 経歴年数 */
    yearOfExperience: number;
}