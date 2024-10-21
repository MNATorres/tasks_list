import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TasksClosedComponent } from './pages/tasks-closed/tasks-closed.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tasks-closed', component: TasksClosedComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: HomeComponent },
];
