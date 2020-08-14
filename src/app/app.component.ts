import { Component } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs';
import * as faker from 'faker';
import { AppState } from './store';
import { Store, select } from '@ngrx/store';
import { PersonNew, PersonUpdate, PersonDelete, PersonAll } from './store/person.actions';
import { selectPeople } from './store/index';
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
    /*this.store.select(selectPeopleCount)
        .subscribe(n => console.log(n));*/
  }

  addNew() {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      _id: new Date().getMilliseconds().toString()
    };

    this.store.dispatch(new PersonNew({person: person}));
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
    let id: string = <string>p._id;
    this.store.dispatch(new PersonDelete({id: id}));  
  }
  
}
