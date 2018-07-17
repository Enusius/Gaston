import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import {UsersService} from './users.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../../environments/environment.prod';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserNewModalComponent } from './user-new-modal/user-new-modal.component';
import {FormsModule} from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {ChartsModule} from 'ng2-charts';
import {StrengthTestModule} from '../strength-test/strength-test.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    ChartsModule,
    StrengthTestModule
  ],
  declarations: [UserListComponent, UserNewModalComponent, UserDetailComponent],
  entryComponents : [UserNewModalComponent],
  providers : [UsersService]
})
export class UsersModule { }
