import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public titleValue: string = '';
  public descriptionValue: string = '';
  public listOfTasks: ITask[] = [];
  public displayedColumns: string[] = [
    'position',
    'title',
    'description',
    'createAt',
  ];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getAllTask();
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
        this.getAllTask();
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
        this.listOfTasks = data.map((task: ITask, i: number) => {
          return {
            ...task,
            position: i + 1,
          };
        });
        console.log('lista', this.listOfTasks);
      },
      error: (error) => {
        console.log('Error al traer la lista de tasks', error);
      },
    });
  }
}
