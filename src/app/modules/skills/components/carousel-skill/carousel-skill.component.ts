import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SkillGroup, SkillItem } from '../../../../core/models/skill.model';

@Component({
  selector: 'app-carousel-skill',
  templateUrl: './carousel-skill.component.html',
  styleUrl: './carousel-skill.component.scss',
})
export class CarouselSkillComponent implements OnInit, OnChanges {
  data!: SkillItem[] | any;
  fileTag: any;
  responsiveOptions!: any[] | undefined;
  @Input() skillGroup!: SkillGroup | any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.data = this.skillGroup?.data;
    this.fileTag = this.skillGroup?.fileTag;
  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '1000px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '500px',
        numVisible: 3,
        numScroll: 3,
      },
    ];
  }
}
