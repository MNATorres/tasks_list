import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public listOfOptions = [
    {
      link: '/home',
      title: 'Home',
    },
    {
      link: '/tasks-closed',
      title: 'Tasks Closed',
    },
    {
      link: '/statistics',
      title: 'Statistics',
    },
  ];
}
