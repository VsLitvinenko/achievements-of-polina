import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CurrentTask } from '../../shared/interfaces/current-task.interface';
import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss']
})
export class TasksPage implements OnInit {
  public loading = true;

  public readonly accordions = [
    {
      value: 'created',
      color: 'primary',
      label: 'Не выполненные',
      array: [],
    },
    {
      value: 'approve',
      color: 'warning',
      label: 'Ожидают подтверждения',
      array: [],
    },
    {
      value: 'success',
      color: 'success',
      label: 'Выполненные',
      array: [],
    },
    {
      value: 'error',
      color: 'light',
      label: 'Не прошли проверку',
      array: [],
    }
  ];
  public readonly accordionGroupValues = this.accordions.map(item => item.value);

  public readonly updateTask$$ = new Subject<CurrentTask>();

  constructor(private readonly data: DataService) {}

  ngOnInit(): void {
    this.data.tasks$.pipe(
      untilDestroyed(this)
    ).subscribe(tasks => {
      this.clearTasks();
      this.filterTasks(tasks);
      this.loading = false;
    });

    this.updateTask$$.pipe(
      // double click control
      throttleTime(500),
      untilDestroyed(this)
    ).subscribe(updatedTask => this.data.updateTask(updatedTask));
  }

  private clearTasks(): void {
    this.accordions.forEach(item => item.array = []);
  }

  private filterTasks(tasks: CurrentTask[]): void {
    tasks.forEach(task => {
      switch (task.status) {
        case 'created':
          this.accordions[0].array.push(task);
          break;
        case 'approve':
          this.accordions[1].array.push(task);
          break;
        case 'success':
          this.accordions[2].array.push(task);
          break;
        case 'error':
          this.accordions[3].array.push(task);
          break;
      }
    });
  }

}
