import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { CurrentAchievement } from '../../shared/interfaces/current-achievement.interface';
import { map } from 'rxjs/operators';

const accordionsTemplate = () => [
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

@Component({
  selector: 'app-achievements',
  templateUrl: 'achievements.page.html',
  styleUrls: ['achievements.page.scss']
})
export class AchievementsPage implements OnInit {
  public readonly accordionGroupValues = accordionsTemplate().map(item => item.value);
  public readonly accordions$ = this.data.achievements$.pipe(
    map(ach => this.filterAchievements(ach))
  );

  constructor(private readonly data: DataService) {}

  ngOnInit(): void {
  }

  public async updateAchievement(newAch: CurrentAchievement): Promise<void> {
    await this.data.updateAchievement(newAch);
  }

  private filterAchievements(achievements: CurrentAchievement[]):
    { value; color; label; style; array: CurrentAchievement[] }[] {
    const result = accordionsTemplate();
    achievements.forEach(item => {
      if (!item.isCollected) {
        result[0].array.push(item);
      }
      else {
        result[1].array.push(item);
      }
    });
    result[0].array.sort((a, b) => b.progress - a.progress);
    return result;
  }

}
