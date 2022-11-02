import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrentAchievement } from '../../interfaces/current-achievement.interface';

@Component({
  selector: 'app-current-achievement',
  templateUrl: './current-achievement.component.html',
  styleUrls: ['./current-achievement.component.scss'],
})
export class CurrentAchievementComponent implements OnInit {
  @Input() public achievement: CurrentAchievement;
  @Output() public updateAchievement = new EventEmitter<CurrentAchievement>();

  constructor() { }

  ngOnInit(): void {}

  public markTaskAsOld(): void {
    if (this.achievement.id && this.achievement.new) {
      const newAchievement = {...this.achievement};
      newAchievement.new = false;
      this.updateAchievement.emit(newAchievement);
    }
  }

  public collectAchieve(): void {
    if (this.achievement.id) {
      const newAchievement = {...this.achievement};
      newAchievement.isCollected = true;
      this.updateAchievement.emit(newAchievement);
    }
  }

}
