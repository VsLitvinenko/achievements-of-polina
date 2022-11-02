import { Component, Input, OnInit } from '@angular/core';
import { CurrentTask } from '../../interfaces/current-task.interface';

@Component({
  selector: 'app-current-task',
  templateUrl: './current-task.component.html',
  styleUrls: ['./current-task.component.scss'],
})
export class CurrentTaskComponent implements OnInit {
  @Input() public task: CurrentTask;

  constructor() { }

  ngOnInit() {}

}
