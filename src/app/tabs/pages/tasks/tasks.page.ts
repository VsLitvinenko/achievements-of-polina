import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { CurrentTask } from '../../shared/interfaces/current-task.interface';
import { map } from 'rxjs/operators';

const accordionsTemplate = () => [
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

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss']
})
export class TasksPage implements OnInit {
  public readonly accordionGroupValues = accordionsTemplate().map(item => item.value);
  public readonly accordions$ = this.data.tasks$.pipe(
    map(tasks => this.filterTasks(tasks)),
  );

  constructor(private readonly data: DataService) {}

  ngOnInit(): void {
  }

  public async updateTask(task: CurrentTask): Promise<void> {
    await this.data.updateTask(task);
  }

  private filterTasks(tasks: CurrentTask[]): { value; color; label; array: CurrentTask[] }[] {
    const keysToIndexes = {
      created: 0,
      approve: 1,
      success: 2,
      error: 3
    };
    const result = accordionsTemplate();
    tasks.forEach(
      task => result[keysToIndexes[task.status]].array.push(task)
    );
    return result;
  }

}
