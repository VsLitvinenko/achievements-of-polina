import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrentTask } from '../../interfaces/current-task.interface';
import { Subject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { throttleTime } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-current-task',
  templateUrl: './current-task.component.html',
  styleUrls: ['./current-task.component.scss'],
})
export class CurrentTaskComponent implements OnInit {
  @Input() public task: CurrentTask;
  @Output() public readonly updateTask = new EventEmitter<CurrentTask>();

  private readonly updateTask$$ = new Subject<CurrentTask>();

  constructor() { }

  ngOnInit() {
    this.updateTask$$.pipe(
      // double click control proxy
      throttleTime(500),
      untilDestroyed(this)
    ).subscribe(updTask => this.updateTask.emit(updTask));
  }

  public markTaskAsOld(): void {
    if (this.task.id && this.task.new) {
      const newTask = {...this.task};
      newTask.new = false;
      this.updateTask$$.next(newTask);
    }
  }

  public completeTask(): void {
    if (this.task.id) {
      const newTask = {...this.task};
      newTask.status = 'approve';
      this.updateTask$$.next(newTask);
    }
  }
}
