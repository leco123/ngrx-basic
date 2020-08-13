import { AppState } from './store/index';
import { Store, select } from '@ngrx/store';
import { personNew } from './store/person.actions';
import { Component, Input } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  people$: Observable<Person[]>;
  

  constructor(private store: Store<AppState>){}

  ngOnInit(){
    this.people$ = this.store.pipe(select('people')); // oque quero retornar
  }

  addNew() {

    let pes: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      _id: new Date().getMilliseconds().toString()
    };
 
    this.store.dispatch(new personNew({person: pes}));

  } 

  update(p: Person) {

  }

  delete(p: Person) {

  }
}
