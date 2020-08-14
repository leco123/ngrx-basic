import { Action, State } from '@ngrx/store';
import * as fromPersonActions from './person.actions';
import { Person } from '../person';
import { state } from '@angular/animations';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

// Entitys
export interface PeopleState extends EntityState<Person>{

}

// Adapter functions 
export const peopleAdapter: EntityAdapter<Person> = createEntityAdapter<Person>({
  selectId:(p: Person) => <string>p._id
});

export const initialState: PeopleState = peopleAdapter.getInitialState({});
 
export function reducer(state = initialState, action: fromPersonActions.PersonActions) {
  switch (action.type) {
    
    case fromPersonActions.PersonActionTypes.PERSON_NEW:
        // concat retorna um novo array e não altera o array existente apenas
        // retorna um novo array com as novas informações setadas
        return peopleAdapter.addOne(action.payload.person, state);
 
    case fromPersonActions.PersonActionTypes.PERSON_UPDATE:
         return peopleAdapter.updateOne({
            id: action.payload.id, 
            changes: action.payload.changes
         }, state);

    case fromPersonActions.PersonActionTypes.PERSON_DELETE:
        // Filter também retorna um novo array conforme filtro aplicado
        return peopleAdapter.removeOne(action.payload.id, state);

    default:
      return state;
  }
}