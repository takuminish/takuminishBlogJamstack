import { Experience } from "./experience.model";
import { License } from "./license.model";
import { Product } from "./product.model";
import { Profile } from "./profile.model";
import { Skill } from "./skill.model";

/**
 * takuminishのプロフィール
 */
export interface TakuminishProfile {
    /** プロフィール情報 */
    profile: Profile;

    /** 経歴情報 */
    experiences: Experience[];

    /** スキル情報 */
    skills: Skill[];

    /** 資格情報 */
    licenses: License[];

    /** 成果物情報 */
    products: Product[];
}