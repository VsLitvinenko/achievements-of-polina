import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AchievementsPage } from './achievements.page';
import { AchievementsPageRoutingModule } from './achievements-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AchievementsPageRoutingModule,
    SharedModule
  ],
  declarations: [AchievementsPage]
})
export class AchievementsPageModule {}
