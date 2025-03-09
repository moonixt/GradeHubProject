import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurworkComponent } from './ourwork/ourwork.component';

export const routes: Routes = [{
    path:"",
    component: HomeComponent
},{
path: 'ourwork',
component: OurworkComponent}];
