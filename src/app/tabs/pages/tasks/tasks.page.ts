import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CurrentTask } from '../../shared/interfaces/current-task.interface';

@UntilDestroy()
@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss']
})
export class TasksPage implements OnInit {
  public loading = true;

  public createdTasks: CurrentTask[] = [];
  public approvedTasks: CurrentTask[] = [];
  public successTasks: CurrentTask[] = [];
  public errorTasks: CurrentTask[] = [];

  constructor(private readonly data: DataService) {}

  ngOnInit(): void {
    this.data.tasks$.pipe(
      untilDestroyed(this)
    ).subscribe(tasks => {
      this.clearTasks();
      this.filterTasks(tasks);
      this.loading = false;
    });
  }

  private clearTasks(): void {
    this.createdTasks = [];
    this.approvedTasks = [];
    this.successTasks = [];
    this.errorTasks = [];
  }

  private filterTasks(tasks: CurrentTask[]): void {
    tasks.forEach(task => {
      switch (task.status) {
        case 'created':
          this.createdTasks.push(task);
          break;
        case 'approve':
          this.approvedTasks.push(task);
          break;
        case 'success':
          this.successTasks.push(task);
          break;
        case 'error':
          this.errorTasks.push(task);
          break;
      }
    });
  }

}
