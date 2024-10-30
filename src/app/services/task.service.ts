import { Injectable } from '@angular/core';
import { ITask } from '../models/task.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpService) {}

  createTask(body: ITask) {
    return this.http.post('task/createtask', body);
  }

  getTasks() {
    return this.http.get('task/alltasks');
  }
}
