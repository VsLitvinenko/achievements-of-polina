import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTaskComponent } from './components/current-task/current-task.component';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './components/loading/loading.component';
import { CurrentAchievementComponent } from './components/current-achievement/current-achievement.component';



@NgModule({
  declarations: [
    CurrentTaskComponent,
    CurrentAchievementComponent,
    LoadingComponent,
  ],
  exports: [
    CurrentTaskComponent,
    CurrentAchievementComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class SharedModule { }
