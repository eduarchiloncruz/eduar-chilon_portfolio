import { Component, OnInit } from '@angular/core';
import { SkillGroup } from '../../core/models/skill.model';
import { SKILLS } from '../../core/data/skill.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skillGroupSelected: SkillGroup | any = SKILLS[0];

  constructor() {}

  ngOnInit(): void {}

  selectedSkillChange(value: any) {
    this.skillGroupSelected = value;
  }
}
