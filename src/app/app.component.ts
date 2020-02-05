import { Component } from '@angular/core';
import { concat, combineLatest } from 'rxjs';
import { stringify } from 'querystring';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public newActivityListIndex = 1;
  public error = false;
  public notSelected = false;
  public done = false;
  public newActivity: string;
  public newActivityChk: boolean;
  public strikeFlag: boolean;
  public selectedActivityArr: Array<string> = [];
  public newActivityList: Array<{
    id: number;
    value: string;
    checked: boolean;
  }> = [];

  public addMore() {
    this.notSelected = false;
    this.done = false;
    if (this.newActivity && this.newActivity.trim()) {
      if (
        !this.newActivityList.find(
          activity => activity.value === this.newActivity.trim()
        )
      ) {
        this.newActivityList.push({
          id: this.newActivityListIndex,
          value: this.newActivity.trim(),
          checked: false
        });
        this.newActivityListIndex = this.newActivityListIndex + 1;
        this.newActivity = '';
      } else {
        this.done = true;
      }
      this.error = false;
    } else {
      this.error = true;
      this.newActivity = '';
    }
  }

  public showActivityList() {
    this.error = false;
    this.done = false;
    this.selectedActivityArr = this.newActivityList.filter((activity) => {
      return (activity.checked);
    }).map(activity => activity.value );
    if (!this.selectedActivityArr.length) {
      this.notSelected = true;
    } else {
      this.notSelected = false;
    }
    console.log(this.selectedActivityArr);
  }

  public checkActivity(evt: any) {
    console.log(this.newActivityList);
    console.log(evt.source._elementRef.nativeElement.innerText);
    console.log(evt.checked);
    console.log(evt);
    if (evt.checked) { this.strikeFlag = true; } else { this.strikeFlag = false; }
  }

  public clearAll() {
    this.notSelected = false;
    this.selectedActivityArr = [];
    this.newActivityList = [];
    this.newActivity = '';
    this.done = false;
    this.error = false;
  }
}
