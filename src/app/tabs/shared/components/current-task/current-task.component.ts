import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrentTask } from '../../interfaces/current-task.interface';

@Component({
  selector: 'app-current-task',
  templateUrl: './current-task.component.html',
  styleUrls: ['./current-task.component.scss'],
})
export class CurrentTaskComponent implements OnInit {
  @Input() public task: CurrentTask;
  @Output() public updateTask = new EventEmitter<CurrentTask>();

  constructor() { }

  ngOnInit() {}

  public markTaskAsOld(): void {
    if (this.task.id && this.task.new) {
      const newTask = {...this.task};
      newTask.new = false;
      this.updateTask.emit(newTask);
    }
  }

  public completeTask(): void {
    if (this.task.id) {
      const newTask = {...this.task};
      newTask.status = 'approve';
      this.updateTask.emit(newTask);
    }
  }
}
