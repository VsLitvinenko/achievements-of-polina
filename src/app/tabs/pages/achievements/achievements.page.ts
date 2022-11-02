import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DataService } from '../../shared/services/data.service';
import { CurrentAchievement } from '../../shared/interfaces/current-achievement.interface';
import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-achievements',
  templateUrl: 'achievements.page.html',
  styleUrls: ['achievements.page.scss']
})
export class AchievementsPage implements OnInit {
  public loading = true;

  public readonly accordions = [
    {
      value: 'created',
      color: 'background',
      label: 'Не полученные',
      array: [],
      style: {}
    },
    {
      value: 'approve',
      color: 'background',
      label: 'Полученные',
      array: [],
      style: { filter: 'brightness(65%)' }
    },
  ];

  public readonly accordionGroupValues = this.accordions.map(item => item.value);

  public readonly updateAchievement$$ = new Subject<CurrentAchievement>();

  constructor(private readonly data: DataService) {}

  ngOnInit(): void {
    this.data.achievements$.pipe(
      untilDestroyed(this)
    ).subscribe(achievements => {
      this.clearAchievements();
      this.filterAchievements(achievements);
      this.loading = false;
    });

    this.updateAchievement$$.pipe(
      // double click control
      throttleTime(500),
      untilDestroyed(this)
    ).subscribe(updatedAch => this.data.updateAchievement(updatedAch));
  }

  private clearAchievements(): void {
    this.accordions.forEach(item => item.array = []);
  }

  private filterAchievements(achievements: CurrentAchievement[]): void {
    achievements.forEach(item => {
      if (!item.isCollected) {
        this.accordions[0].array.push(item);
      }
      else {
        this.accordions[1].array.push(item);
      }
    });
    this.accordions[0].array.sort((a, b) => b.progress - a.progress);
  }

}
