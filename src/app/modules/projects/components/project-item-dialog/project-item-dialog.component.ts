import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Project } from '../../../../core/models/project.model';

@Component({
  selector: 'app-project-item-dialog',
  templateUrl: './project-item-dialog.component.html',
  styleUrl: './project-item-dialog.component.scss',
})
export class ProjectItemDialogComponent implements OnInit, OnChanges {
  @Input() visible: boolean = false;
  @Input() project!: Project;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  closeProjectDialog() {
    this.closeDialog.emit();
  }
}
