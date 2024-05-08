import { Component, OnInit } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { projects } from '../../core/data/project.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = projects;

  constructor() {}
  ngOnInit(): void {}
}
