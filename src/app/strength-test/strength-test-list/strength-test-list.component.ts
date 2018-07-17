import {Component, OnInit} from '@angular/core';
import {StrengthTestService} from '../strength-test.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-strength-test-list',
  templateUrl: './strength-test-list.component.html',
  styleUrls: ['./strength-test-list.component.css']
})
export class StrengthTestListComponent implements OnInit {

  public strengthTests$: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private strengthTestService: StrengthTestService
  ) { }

  ngOnInit() {
    this.route.pathFromRoot[2].params.subscribe(
      (params: ParamMap) => this.strengthTests$ = this.strengthTestService.getByUserId(params['userId'])
    );
  }

}
