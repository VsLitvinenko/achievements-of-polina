import { Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CurrentTask } from '../interfaces/current-task.interface';
import { CurrentAchievement } from '../interfaces/current-achievement.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public readonly tasks$: Observable<CurrentTask[]> = collectionData(
    collection(this.firestore, 'tasks'),
    { idField: 'id' }
  ).pipe(
      map(res => res.map(task => ({
        id: task.id,
        title: task.title,
        imgSrc: task.imgSrc,
        status: task.status,
        new: task.new,
        startDate: new Date(task.startDate.seconds * 1000),
        endDate: task.endDate ? new Date(task.endDate.seconds * 1000) : null
      }))),
      shareReplay(1),
    );

  public readonly achievements$: Observable<CurrentAchievement[]> = collectionData(
    collection(this.firestore, 'achievements'),
    { idField: 'id' }
  ).pipe(
    shareReplay(1)
  ) as Observable<CurrentAchievement[]>;

  constructor(private readonly firestore: Firestore) { }

  public async updateTask(newTask: CurrentTask): Promise<any> {
    const currentTask = doc(this.firestore, `tasks/${newTask.id}`);
    return updateDoc(currentTask, { ...newTask });
  }

  public async updateAchievement(newAch: CurrentAchievement): Promise<any> {
    const currentAch = doc(this.firestore, `achievements/${newAch.id}`);
    return updateDoc(currentAch, { ...newAch });
  }
}
