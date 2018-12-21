import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  myActivity: Array<string> = ['Wash hands', 'Run about 10 kilometers'];

  draft: string;

  constructor() {
    this.draft = '';
  }

  addNewItem() {
    this.myActivity.push(this.draft);
    this.draft = '';
  }

  deleteItem(event: Event) {
    var index = (<HTMLInputElement>event.target).value;
    console.log(index);
    this.myActivity.splice(parseInt(index), 1);
  }


  ngOnInit() {
  }

}
