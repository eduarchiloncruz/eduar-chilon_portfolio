import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [CommonModule, ButtonModule, MenubarModule, AppRoutingModule],
  exports: [FooterComponent, NavbarComponent],
})
export class CommonsModule {}
