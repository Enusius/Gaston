import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-new-modal',
  templateUrl: './user-new-modal.component.html',
  styleUrls: ['./user-new-modal.component.css']
})
export class UserNewModalComponent implements OnInit {

  public user: {
    firstName: string,
    lastName: string
  };

  constructor(public activeModal: NgbActiveModal) {
    this.user = {
      firstName : '',
      lastName : ''
    };
  }

  ngOnInit() {
  }

  save() {
    this.activeModal.close(this.user);
  }

  dismiss() {
    this.activeModal.dismiss('Cancel by User');
  }

}
