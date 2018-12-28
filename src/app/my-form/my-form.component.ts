import {Component, OnInit} from '@angular/core';
import {ActivityModel} from './activity.model';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {


  myActivity: Array<ActivityModel> = [
    new ActivityModel(new Date(), 'Wash your hands!'),
    new ActivityModel(new Date(), 'Run about 10 kilometers!')];

  draft: string;

  constructor() {
    this.draft = '';
  }

  addNewItem() {
    if (this.draft !== '') {
      this.myActivity.push({
        creationDate: new Date(),
        content: this.draft
      });
      this.draft = '';
    }
  }

  addNewItemByHitEnter(event) {
    if (event.key === 'Enter') {
      this.addNewItem();
    }
  }

  deleteItem(element) {
    this.myActivity.splice(parseInt(element), 1);
  }

  ngOnInit() {
  }

}
