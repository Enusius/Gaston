import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Observable} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserNewModalComponent} from '../user-new-modal/user-new-modal.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: Observable<any[]>;
  closeResult: string;

  constructor(
    private usersService: UsersService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.users = this.usersService.getAll();
  }

  open() {
    this.modalService.open(UserNewModalComponent)
      .result.then((result) => {
      this.usersService.add(result);
    }, (reason) => {
      console.log(reason);
    });
  }

}
