import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/domain/model/resource-model/experience.model';

@Component({
  selector: 'app-Experience',
  templateUrl: './Experience.component.html',
  styleUrls: ['./Experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  /** 経歴情報 */
  @Input() experiences: Experience[] = [];

  constructor() { }

  ngOnInit() {
  }

}
