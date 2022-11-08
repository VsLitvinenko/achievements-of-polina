import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrentAchievement } from '../../interfaces/current-achievement.interface';
import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-current-achievement',
  templateUrl: './current-achievement.component.html',
  styleUrls: ['./current-achievement.component.scss'],
})
export class CurrentAchievementComponent implements OnInit {
  @Input() public achievement: CurrentAchievement;
  @Output() public updateAchievement = new EventEmitter<CurrentAchievement>();

  public skeletonInsteadImg = true;

  private readonly updateAchievement$$ = new Subject<CurrentAchievement>();

  constructor() { }

  ngOnInit(): void {
    this.updateAchievement$$.pipe(
      // double click control proxy
      throttleTime(500),
      untilDestroyed(this)
    ).subscribe(updTask => this.updateAchievement.emit(updTask));
  }

  public hideSkeleton(): void {
    this.skeletonInsteadImg = false;
  }

  public markTaskAsOld(): void {
    if (this.achievement.id && this.achievement.new) {
      const newAchievement = {...this.achievement};
      newAchievement.new = false;
      this.updateAchievement$$.next(newAchievement);
    }
  }

  public collectAchieve(): void {
    if (this.achievement.id) {
      const newAchievement = {...this.achievement};
      newAchievement.isCollected = true;
      this.updateAchievement$$.next(newAchievement);
    }
  }

}
