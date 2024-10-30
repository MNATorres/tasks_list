import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksClosedComponent } from './tasks-closed.component';

describe('TasksClosedComponent', () => {
  let component: TasksClosedComponent;
  let fixture: ComponentFixture<TasksClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksClosedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
