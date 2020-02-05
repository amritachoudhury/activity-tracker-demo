import { Component } from '@angular/core';
import { concat, combineLatest } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public i = 1;
  public error = false;
  public newActivity: string;

  public newActivityList: Array<{id: number, value: string, checked: boolean}> = [];
  
  public done = false; // done = false means activity has not yet been added
  // public show = true; // when show = true, the first Label will be visible
                      // and the checkboxes will be invisible

  public addMore() {

    this.done = false;

    if (this.newActivity && this.newActivity.trim()) {
      if (!this.newActivityList.find((activity) => activity.value === this.newActivity)) {
        this.newActivityList.push({id: this.i, value: this.newActivity, checked: false});
        this.i = this.i + 1;
        this.newActivity = '';
      } else {
        this.done = true;
      }
      this.error = false;
    } else {
      this.error = true;
      this.newActivity = '';
    }
    // if (this.newActivityList.length) {
    //   this.show = false;
    // }
  }

  public clearAll() {
    this.newActivityList = [];
    this.newActivity = '';
    this.done = false;
    this.error = false;
    // this.show = true;
  }

}
