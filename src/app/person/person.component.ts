import { Person } from './../person';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  @Output() delete = new EventEmitter<Person>();
  @Output() update = new EventEmitter<Person>();
  
  constructor() { }

  ngOnInit() {
  }

}
