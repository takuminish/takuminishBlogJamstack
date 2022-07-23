import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/domain/model/resource-model/skill.model';

/**
 * スキル情報のコンポーネント
 */
@Component({
  selector: 'app-Skill',
  templateUrl: './Skill.component.html',
  styleUrls: ['./Skill.component.scss']
})
export class SkillComponent {

  /** スキル一覧 */
  @Input() skills: Skill[] = [];

  /**
   * コンストラクタ
   */
  constructor() { }

}
