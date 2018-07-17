import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StrengthTestListComponent} from './strength-test-list/strength-test-list.component';
import {StrengthTestDetailComponent} from './strength-test-detail/strength-test-detail.component';
import {StrengthTestNewComponent} from './strength-test-new/strength-test-new.component';


const routes: Routes = [
  {
    path: '',
    component: StrengthTestListComponent
  },
  {
    path: 'new',
    component: StrengthTestNewComponent
  },
  {
    path: ':strengthTestId',
    component: StrengthTestDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrengthTestRoutingModule { }
