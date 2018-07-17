import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UsersService} from '../users.service';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public user$: Observable<any>;


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [1.21, 1.23, 1.44, 1.56, 1.59, 1.74, 1.78], label: 'Ratio'}
    // {data: [160, 163, 170, 204, 231, 256, 262], label: 'Maximum Finger Strength'}
  ];

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private service: UsersService) { }

  ngOnInit() {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getUser(params.get('userId')))
    );
  }




}
