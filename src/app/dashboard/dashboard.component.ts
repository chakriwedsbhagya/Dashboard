import { Component, ViewChild } from '@angular/core';
import { GridStack, GridStackWidget } from 'gridstack';
import * as d3 from 'd3';
import 'chartjs-plugin-annotation';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  map:any;
  cords:any;
  location: any;
  gmarkers = [];
  locationsList:any = [];
  isBigMap: boolean = false; 

  mathPow = Math.pow;	
  unitVal = 111.19; // unit value convertion per KM	
  limit = 10; // Refers 10KM radius	
  radius = this.mathPow(this.unitVal/this.limit, 2);

    @ViewChild('myCanvas')
  public canvas: any;
  public context: CanvasRenderingContext2D | undefined;
  public chartType: string = 'line';
  public chartData: any[] | undefined;
  public chartLabels: any[] | undefined;
  public chartColors: any[] | undefined;
  public chartOptions: any;
  
  gaugemap:any = {};
  batteryVal1 = 30;
  batteryVal2 = 70;
  batteryVal3 = 10;
  batteryVal4 = 90;
  items: GridStackWidget[] = [
    { x: 0, y: 1, w: 2, h: 6, id: `grid-1` , content: 'tower'},
    { x: 2, y: 2, w: 3, h: 4, id: `grid-2`, content: 'battery' },
    { x: 5, y: 3, w: 3, h: 4, id: `grid-3`, content: 'angular-positions' },
    { x: 8, y: 3, w: 4, h: 5, id: `grid-4`, content: 'sensor-positions' },
    { x: 2, y: 4, w: 6, h: 5, id: `grid-5`, content: 'payloads' },
    { x: 8, y: 5, w: 4, h: 5, id: `grid-6`, content: 'topology' },
    { x: 2, y: 7, w: 6, h: 5, id: `grid-7`, content: 'location-sensor' },
    { x: 0, y: 6, w: 2, h: 4, id: `grid-8`, content: 'map-view' },
    { x: 8, y: 10, w: 4, h: 4, id: `grid-9`, content: 'geometric-view' },
  ];
  currentImage: string = '';
  images: string[] = ['tower-1.png', 'tower-2.png', 'tower-3.png'];
  currentIndex: number = 0;
  private grid!: GridStack;

  constructor() {}

  ngOnInit() {
    this.currentImage = `../../assets/tower-1.png`
    this.generateChart()
    this.loadImages();
  }
  onImageClick() {
    this.currentIndex++;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
    this.currentImage = `../../assets/${this.images[this.currentIndex]}`;
  }
  loadImages() {
    
  }
  generateChart() {
    this.chartData = [{
      data: [3, 1, 4, 2, 5],
      label: 'Anthracnose',
      fill: false
    }];
    this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    this.chartColors = [{
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
         borderColor: 'rgba(0, 0, 0, 1)'
    }];
    this.chartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      },
      annotation: {
         drawTime: 'beforeDatasetsDraw',
         annotations: [{
            type: 'box',
            id: 'a-box-1',
            yScaleID: 'y-axis-0',
            yMin: 0,
            yMax: 1,
            backgroundColor: '#4cf03b'
         }, {
            type: 'box',
            id: 'a-box-2',
            yScaleID: 'y-axis-0',
            yMin: 1,
            yMax: 2.7,
            backgroundColor: '#fefe32'
         }, {
            type: 'box',
            id: 'a-box-3',
            yScaleID: 'y-axis-0',
            yMin: 2.7,
            yMax: 5,
            backgroundColor: '#fe3232'
         }]
      }
    }
  }
  add() {}

  save() {
    console.log(this.grid.save());
  }


  public ngAfterViewInit() {
    this.grid = GridStack.init({
      cellHeight: 70,
      float: false,
    });
  }

  onAreaHover(from: any) {
    if(from === 'area1') {
      this.batteryVal1 = 90;
    } else if(from === 'area3') {
      this.batteryVal1 = 50;
    }
    console.log({from})
  }
  mouseLeave() {
    this.batteryVal1 = 30
  }
  
}
