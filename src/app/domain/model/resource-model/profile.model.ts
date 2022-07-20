/**
 * プロフィールモデル
 */
export interface Profile {
    /** 名前 */
    name: string;

    /** 自己紹介文 */
    introduction: string;

    /** プロフィール画像 */
    profileImage: string;

    /** GitHubURL */
    githubUrl: string;

    /** QiitaURL */
    qiitaUrl: string;

    /** ZennURL */
    zennUrl: string;

    /** TwitterURL */
    twitterUrl: string;
}