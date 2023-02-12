import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ObjectsComponent } from './objects.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ObjectsComponent },
];

@NgModule({
  declarations: [
    ObjectsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class ObjectsModule { }
