import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined = [{}];
  linkActive: string = 'home';
  isOpen: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  handleActiveLink(link: string) {
    this.linkActive = link;
  }

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}
