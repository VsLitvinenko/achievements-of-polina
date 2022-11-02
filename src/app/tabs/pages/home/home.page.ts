import { Component } from '@angular/core';
import { CurrentTask } from '../../shared/interfaces/current-task.interface';

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
    new: true,
    startDate: new Date(2022, 0, 1),
    endDate: new Date(2022, 11, 31)
  };

  constructor() {}

}
