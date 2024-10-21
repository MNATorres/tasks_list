import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../models/Home';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public inputValue: string = '';
  public listOfTasks: ITask[] = [];

  public addTask() {
    if (this.inputValue.trim() === '') return;
    this.listOfTasks = [
      ...this.listOfTasks,
      { id: Math.random(), title: 'New Task', description: this.inputValue },
    ];
    this.inputValue = '';
  }
}
