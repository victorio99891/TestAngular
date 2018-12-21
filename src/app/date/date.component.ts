import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  date: Date = new Date();

  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 10000);
  }

  ngOnInit() {
  }

}
