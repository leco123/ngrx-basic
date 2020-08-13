import { selectPeople } from './store/index';
import { AppState } from './store';
import { Store, select } from '@ngrx/store';
import { PersonNew, PersonAll, PersonUpdate, PersonDelete } from './store/person.actions';
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
    // Informando o Store da intenção de modificar o estado atual de minha aplicação
    this.store.dispatch(new PersonAll());
    // Obtendo as pessoas através de uma váriavel people
    // que fica dentro da interface AppState
    //this.people$ = this.store.pipe(select('people')); // oque quero retornar
    this.people$ = this.store.select(selectPeople);  
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
 
    this.store.dispatch(new PersonNew({person: pes}));

  } 

  update(p: Person) {
   
    p.name = faker.name.findName();
    p.address = faker.address.streetAddress();
    p.city = faker.address.city();
    p.country = faker.address.country();
    p.age = Math.round(Math.random() * 100);

    this.store.dispatch(new PersonUpdate({person: p}));

  }

  delete(p: Person) {
    this.store.dispatch(new PersonDelete({id: p._id}));
  }
}
