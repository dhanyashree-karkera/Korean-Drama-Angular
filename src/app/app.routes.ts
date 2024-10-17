import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { DramasComponent } from './dramas/dramas.component';

export const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    {
        path:'header',
        component:HeaderComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'dramas',
        component:DramasComponent
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
