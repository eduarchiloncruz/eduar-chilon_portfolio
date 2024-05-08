import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { PaginatorModule } from 'primeng/paginator';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { DialogModule } from 'primeng/dialog';
import { ProjectItemDialogComponent } from './components/project-item-dialog/project-item-dialog.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectItemComponent,
    ProjectItemDialogComponent,
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    DialogModule,
    ButtonModule,
    TagModule,
  ],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
