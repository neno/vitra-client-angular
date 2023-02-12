import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectsService } from './objects.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {

  objects$: Observable<any> | undefined;

  constructor(private objectsService: ObjectsService) { }

  ngOnInit(): void {
    this.objects$ = this.objectsService.getObjects();
  }

}
