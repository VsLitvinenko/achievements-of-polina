import { Component } from '@angular/core';
import { CurrentTask } from '../../shared/interfaces/current-task.interface';
import { CurrentAchievement } from '../../shared/interfaces/current-achievement.interface';

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

  public testAchievement: CurrentAchievement = {
    id: null,
    title: 'Программист',
    description: 'Назвать 10 переменных не "a, a1, b2, c3", а нормальными именами',
    imgSrc: '../../../../assets/imgs/hacker.jpg',
    progress: 40,
    new: false,
    isCollected: false
  };

  constructor() {}

}
