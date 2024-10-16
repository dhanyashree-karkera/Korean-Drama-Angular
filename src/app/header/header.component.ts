import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, CommonModule,MenubarModule,FormsModule, InputTextModule,InputIconModule, IconFieldModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  subject: MenuItem[] | undefined;

  ngOnInit() {
      this.subject = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              style:{'color':'white'},
              routerLink:'/home'
              
          },
          {
              label: 'About',
              icon: 'pi pi-star',
              style:{ 'color':'white'},
              routerLink:'/about'
          },
          {
              label: 'Services',
              icon: 'pi pi-asterisk',
              style:{ 'color':'white'}
          },
          {
              label: 'Contact',
              icon: 'pi pi-phone',
              style:{ 'color':'white'},
              routerLink:'/contact'
          }
      ]
  }
}