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
  selectedImage:any = 'currentimage1'

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
  public currentPosition: any;
  public cameraOrbit = '45deg 55deg 2.5m';
  public src = 'assets/SIGNAL TOWER.gltf';
  
  gaugemap:any = {};
  batteryVal1 = 30;
  batteryVal2 = 70;
  batteryVal3 = 10;
  batteryVal4 = 90;
  items: GridStackWidget[] = [
    { x: 0, y: 0, w: 4, h: 5, id: `grid-1` , content: 'tower'},
    { x: 0, y: 5, w: 4, h: 4, id: `grid-2`, content: 'battery' },
    { x: 4, y: 5, w: 4, h: 4, id: `grid-3`, content: 'angular-positions' },
    { x: 5, y: 4, w: 8, h: 5, id: `grid-4`, content: 'sensor-positions' },
    { x: 0, y: 14, w: 12, h: 6, id: `grid-5`, content: 'payloads' },
    { x: 0, y: 9, w: 4, h: 5, id: `grid-6`, content: 'topology' },
    { x: 8, y: 9, w: 4, h: 5, id: `grid-7`, content: 'location-sensor' },
    { x: 8, y: 5, w: 4, h: 4, id: `grid-8`, content: 'map-view' },
    { x: 4, y: 9, w: 4, h: 5, id: `grid-9`, content: 'geometric-view' },
    
  ];
  //
  currentImage: string = '';
  images: string[] = ['tower-1.png', 'tower-2.png', 'tower-3.png'];
  currentIndex: number = 0;
  currentChart: string = '';
  private grid!: GridStack;
  public angleDirection = "X Position";
  selectePacketImg: string = `../../assets/packet0.png`;
  selectedGeo: string = `../../assets/geo-1.png`;
  selectedTopoImg: string = `../../assets/topo1.jpg`
  constructor() {}

  ngOnInit() {
    this.currentImage = `../../assets/tower-1.png`
    this.currentPosition = `../../assets/position0.png`
    this.currentChart = `../../assets/chart0.png`
    this.generateChart()
  }
  onImageClick() {
    this.currentIndex++;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
    this.currentImage = `../../assets/${this.images[this.currentIndex]}`;
    console.log("index", this.currentIndex);
    this.updatePositions()
  }
  updatePositions() {
    if(this.currentIndex === 0) {
      this.batteryVal1 = 30;
      this.angleDirection = 'X Position';
    } else if(this.currentIndex === 1) {
      this.batteryVal1 = 90;
      this.angleDirection = 'Y Position';
    } else if(this.currentIndex === 2) {
      this.batteryVal1 = 10;
      this.angleDirection = 'Z Position';
    }
    this.currentPosition = `assets/position${this.currentIndex}.png`;
    this.currentChart = `assets/chart${this.currentIndex}.png`;
    this.selectePacketImg = `assets/packet${this.currentIndex}.png`;
    this.selectedGeo = `assets/geo-${this.currentIndex + 1}.png`;
    this.selectedTopoImg = `assets/topo${this.currentIndex + 1}.jpg`;
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
      cellHeight: 80,
      float: false,
      disableResize: true,
      disableDrag: true
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
