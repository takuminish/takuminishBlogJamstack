import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/domain/model/resource-model/experience.model';

/**
 * 経歴情報のコンポーネント
 */
@Component({
  selector: 'app-Experience',
  templateUrl: './Experience.component.html',
  styleUrls: ['./Experience.component.scss']
})
export class ExperienceComponent {

  /** 経歴情報 */
  @Input() experiences: Experience[] = [];

  /**
   * コンストラクタ
   */
  constructor() { }
}
