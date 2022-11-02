import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksPage } from './tasks.page';
import { TasksPageRoutingModule } from './tasks-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TasksPageRoutingModule,
    SharedModule
  ],
  declarations: [TasksPage]
})
export class TasksPageModule {}
