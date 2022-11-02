import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTaskComponent } from './components/current-task/current-task.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CurrentTaskComponent
  ],
  exports: [
    CurrentTaskComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class SharedModule { }
