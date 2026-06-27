import { Routes } from '@angular/router';
import { DeadlineComponent } from './deadline/deadline.component';
import { App } from './app';

export const routes: Routes = [
   {path: 'home', component: App},
   {path: 'deadline', component: DeadlineComponent},
];
