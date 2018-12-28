import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { DateComponent } from './date/date.component';
import { MyFormComponent } from './my-form/my-form.component';
import {FormsModule} from '@angular/forms';
import { ActivityComponent } from './my-form/activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    DateComponent,
    MyFormComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
