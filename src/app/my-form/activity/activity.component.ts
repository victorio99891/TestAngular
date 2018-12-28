import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivityModel} from '../activity.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @Input('myIndex') index: number;
  @Input('myActivity') activity: ActivityModel;
  isActivityDone: boolean = false;

  @Output('myOutputIndex') outputIndex = new EventEmitter<number>();

  deleteItem() {
    this.outputIndex.emit(this.index);
  }

  toggleDone() {
    this.isActivityDone = !this.isActivityDone;
  }


  constructor() {
  }

  ngOnInit() {
  }

}
