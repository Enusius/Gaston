import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ChartsModule} from 'ng2-charts';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment.prod';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {StrengthTestListComponent} from './strength-test-list/strength-test-list.component';
import {StrengthTestDetailComponent} from './strength-test-detail/strength-test-detail.component';
import {StrengthTestNewComponent} from './strength-test-new/strength-test-new.component';
import {StrengthTestRoutingModule} from './strength-test-routing.module';
import {ArduinoService} from './arduino.service';
import {StrengthTestService} from './strength-test.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StrengthTestRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    ChartsModule
  ],
  declarations: [StrengthTestListComponent, StrengthTestDetailComponent, StrengthTestNewComponent],
  providers: [ArduinoService, StrengthTestService]
})
export class StrengthTestModule { }
