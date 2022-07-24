import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Skill } from 'src/app/domain/model/resource-model/skill.model';

const CATEGORY = {
  language: '言語',
  framework: 'フレームワーク'
};

/**
 * スキル情報のコンポーネント
 */
@Component({
  selector: 'app-Skill',
  templateUrl: './Skill.component.html',
  styleUrls: ['./Skill.component.scss']
})
export class SkillComponent implements OnChanges {

  /** フレームワーク一覧 */
  public frameworkSkills: Skill[] = [];

  /** 言語一覧 */
  public languageSkills: Skill[] = [];

  /** スキル一覧 */
  @Input() skills: Skill[] = [];

  /**
   * コンストラクタ
   */
  constructor() { }

  /**
 * licensesが変更された場合に発火
 * @param changes 
 */
  ngOnChanges(changes: SimpleChanges): void {
    // カテゴリは配列で取得されるため、先頭のみを使用する
    this.frameworkSkills = this.skills.filter(s => s.category[0] === CATEGORY.framework).sort()
    this.languageSkills = this.skills.filter(s => s.category[0] === CATEGORY.language).sort();
  }

}
