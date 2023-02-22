import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-battery',
  templateUrl: './svg-battery.component.html',
  styleUrls: ['./svg-battery.component.scss'],
  inputs: ['value']
})
export class SvgBatteryComponent implements OnInit {
  value:number = 0;
  constructor() { }

  ngOnInit() {
  }

}