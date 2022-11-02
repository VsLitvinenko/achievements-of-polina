import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CurrentTask } from '../interfaces/current-task.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly firestore: Firestore) { }

  public get tasks$(): Observable<CurrentTask[]> {
    const tasks = collection(this.firestore, 'tasks');
    return collectionData(tasks, { idField: 'id' }).pipe(
      map(
        res => res.map(task => ({
          id: task.id,
          title: task.title,
          imgSrc: task.imgSrc,
          status: task.status,
          new: task.new,
          startDate: new Date(task.startDate),
          endDate: task.endDate ? new Date(task.endDate) : null
        }))
      ),
      shareReplay(1)
    );
  }
}
