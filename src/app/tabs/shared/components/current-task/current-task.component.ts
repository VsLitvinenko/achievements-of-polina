import { Component, Input, OnInit } from '@angular/core';

export interface CurrentTask {
  id: string;
  title: string;
  imgSrc: string;
  status: 'created' | 'approve' | 'success'  | 'error';
  new: boolean;
  startDate: Date;
  endDate: Date;
}

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
