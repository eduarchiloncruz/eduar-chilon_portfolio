import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SkillGroup } from '../../../../core/models/skill.model';
import { SKILLS } from '../../../../core/data/skill.data';
import { FormControl, FormGroup } from '@angular/forms';
import { DropdownChangeEvent } from 'primeng/dropdown';

@Component({
  selector: 'app-select-skill',
  templateUrl: './select-skill.component.html',
  styleUrl: './select-skill.component.scss',
})
export class SelectSkillComponent implements OnInit {
  skills: SkillGroup[] = SKILLS;
  formGroup: FormGroup | any;

  @Output() selectedSkillChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      selectedCity: new FormControl<SkillGroup | null>(this.skills[0]),
    });
  }

  onSkillChange($event: DropdownChangeEvent | any) {
    this.selectedSkillChange.emit($event?.value);
  }
}
