import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public titleValue: string = '';
  public descriptionValue: string = '';
  public listOfTasks: ITask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getAllTask()
  }

  public addTask() {
    if (this.titleValue.trim() === '' || this.descriptionValue.trim() === '')
      return;

    const body = {
      id: uuidv4(),
      title: this.titleValue,
      description: this.descriptionValue,
      createAt: moment().format('DD/MM/YYYY'),
    };

    this.taskService.createTask(body).subscribe({
      next: (response) => {
        console.log('Tarea creada:', response); // Maneja la respuesta exitosa
        this.getAllTask()
      },
      error: (error) => {
        console.error('Error al crear la tarea:', error); // Maneja el error
      },
    });

    this.titleValue = '';
    this.descriptionValue = '';
  }

  public getAllTask() {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.listOfTasks = data;
      },
      error: (error) => {
        console.log('Error al traer la lista de tasks', error);
      },
    });
  }
}
