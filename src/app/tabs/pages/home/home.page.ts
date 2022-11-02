import { Component } from '@angular/core';
import { CurrentTask } from '../../shared/components/current-task/current-task.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public testTask: CurrentTask = {
    id: null,
    title: 'Быть целый год самой красивой и веселой ;)',
    imgSrc: '../../../../assets/imgs/cool_girl.png',
    status: 'created',
    new: false,
    startDate: new Date(2022, 0, 1),
    endDate: new Date(2022, 11, 31)
  };

  constructor() {}

}
