import { Component, OnInit } from '@angular/core';
import {ArduinoService} from '../arduino.service';
import {StrengthTestService} from '../strength-test.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-strength-test-new',
  templateUrl: './strength-test-new.component.html',
  styleUrls: ['./strength-test-new.component.css']
})
export class StrengthTestNewComponent implements OnInit {

  private userId: string;
  public onAquisition: boolean;
  private startedAcquisitionDate: number;
  public highestPoint: number;

  // lineChart
  public lineChartData: Array<any> = [
    {data: [], label: 'Series A'},
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {responsive: true};
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private arduinoService: ArduinoService,
    private strengthTestService: StrengthTestService) {
  }

  ngOnInit(): void {
    this.highestPoint = 0;
    this.onAquisition = false;
    this.arduinoService.initSocket();
    this.arduinoService.onMessage().subscribe(value => {
      this.updateData(value);
    });
    this.route.pathFromRoot[2].params.subscribe(
      (params: ParamMap) => this.userId = params['userId']
    );
  }

  public updateData(value: string): void {

    const numberedValue = Number(value);

    if (!isNaN(numberedValue) && this.onAquisition) {
      if (numberedValue > this.highestPoint) {
        this.highestPoint = numberedValue;
      }

      const _lineChartData = JSON.parse(JSON.stringify(this.lineChartData));
      _lineChartData[0].data.push(numberedValue);
      this.lineChartLabels.push((Date.now() - this.startedAcquisitionDate) / 1000);
      this.lineChartData = _lineChartData;

    }
  }

  toggleAcquisition() {
    this.onAquisition = !this.onAquisition;

    if (this.onAquisition) {
      this.startedAcquisitionDate = Date.now();
    }
  }

  saveData() {
    const strengthTest = {
      date : Date.now(),
      data : {
        labels : [0.059, 0.152, 0.251, 0.341, 0.437, 0.535, 0.626, 0.722, 0.82, 0.91, 1.006, 1.104, 1.195,
          1.293, 1.387, 1.488, 1.576, 1.671, 1.771, 1.859, 1.955, 2.065, 2.144, 2.24, 2.339, 2.43, 2.523,
          2.625, 2.725, 2.815, 2.908, 3.007, 3.092, 3.191, 3.297, 3.377, 3.473, 3.573, 3.663, 3.758, 3.856,
          3.957, 4.041, 4.14, 4.241, 4.325, 4.423, 4.525, 4.609, 4.709, 4.806, 4.895, 4.991], // this.lineChartLabels,
        data : [3.2, 3.1, 2.8, 2.7, 2.9, 3, 3.9, 5.1, 6.2, 7.4, 8.7, 9.4, 9.8, 10.3, 10.7,
          12.2, 14.6, 20.5, 27.9, 36.8, 49.7, 74.2, 99.4, 117.8, 132, 145.3, 159.4, 179.2, 197.6,
          209.4, 217.6, 227, 237, 243.4, 246.5, 250.5, 256.1, 261.3, 263.5, 264.6, 265.6, 266.3,
          264.1, 261.8, 261.3, 260.9, 261.7, 262.6, 262.4, 261, 258.6, 256.8, 250.8]// this.lineChartData[0].data
      }
    };

    this.strengthTestService.add(this.userId, strengthTest);
  }
}
