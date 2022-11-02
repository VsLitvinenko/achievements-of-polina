import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTaskComponent } from './components/current-task/current-task.component';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    CurrentTaskComponent,
    LoadingComponent,
  ],
  exports: [
    CurrentTaskComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class SharedModule { }
