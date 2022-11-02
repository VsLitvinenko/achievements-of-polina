import { Component, Input, OnInit } from '@angular/core';
import { CurrentAchievement } from '../../interfaces/current-achievement.interface';

@Component({
  selector: 'app-current-achievement',
  templateUrl: './current-achievement.component.html',
  styleUrls: ['./current-achievement.component.scss'],
})
export class CurrentAchievementComponent implements OnInit {
  @Input() public achievement: CurrentAchievement;

  constructor() { }

  ngOnInit(): void {}

}
