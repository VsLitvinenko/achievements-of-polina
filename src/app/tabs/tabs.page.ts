import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public readonly tasksBadge$ = this.data.tasks$.pipe(
    map(tasks => tasks.filter(task => task.new).length)
  );

  constructor(private readonly data: DataService) {}

}
