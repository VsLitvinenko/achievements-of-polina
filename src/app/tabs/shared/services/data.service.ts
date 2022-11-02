import { Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { CurrentTask } from '../interfaces/current-task.interface';

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
      share()
    );

  constructor(private readonly firestore: Firestore) { }

  public async updateTask(newTask: CurrentTask): Promise<any> {
    const currentTask = doc(this.firestore, `tasks/${newTask.id}`);
    return updateDoc(currentTask, { ...newTask });
  }
}
