import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/domain/model/resource-model/skill.model';

@Component({
  selector: 'app-Skill',
  templateUrl: './Skill.component.html',
  styleUrls: ['./Skill.component.scss']
})
export class SkillComponent implements OnInit {

  /** スキル一覧 */
  @Input() skills: Skill[] = [];

  constructor() { }

  ngOnInit() {
  }

}
