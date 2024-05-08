import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { SelectSkillComponent } from './components/select-skill/select-skill.component';
import { CarouselSkillComponent } from './components/carousel-skill/carousel-skill.component';

@NgModule({
  declarations: [SkillsComponent, SelectSkillComponent, CarouselSkillComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    CarouselModule,
    ButtonModule,
    TagModule,
  ],
  exports: [SkillsComponent],
})
export class SkillsModule {}
