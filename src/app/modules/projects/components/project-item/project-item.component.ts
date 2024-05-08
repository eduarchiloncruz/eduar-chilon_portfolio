import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Project } from '../../../../core/models/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
})
export class ProjectItemComponent implements OnInit, OnChanges {
  @Input() project!: Project;
  projectImage!: string;
  visible: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.projectImage = `./assets/projects/${this.project.image}.png`;
  }

  ngOnInit(): void {}

  showDialog() {
    this.visible = !this.visible;
  }
}
