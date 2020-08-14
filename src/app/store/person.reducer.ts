import { Action } from '@ngrx/store';
import * as fromPersonActions from './person.actions';
import { Person } from '../person';
import { state } from '@angular/animations';

export const initialState: Array<Person> = [];
 
export function reducer(state = initialState, action: fromPersonActions.PersonActions) {
  switch (action.type) {
    case fromPersonActions.PersonActionTypes.PERSON_ALL:
      return state;
 
    case fromPersonActions.PersonActionTypes.PERSON_NEW:
        // concat retorna um novo array e não altera o array existente apenas
        // retorna um novo array com as novas informações setadas
        return state.concat([action.payload.person]);
 
    case fromPersonActions.PersonActionTypes.PERSON_UPDATE:
        // Pode ser criado um novo array com slice sem passar nenhum parâmetro
        // people vai criar uma cópia do state
        let people = state.slice();
        let i = people.findIndex(p => p._id == action.payload.person._id);
        if (i >= 0)
             people[i] = action.payload.person;  
         // Retorna people com novo endereço/objeto 
         // sem alterar o estado apenas retornando um novo estado 
         return people;

    case fromPersonActions.PersonActionTypes.PERSON_DELETE:
        // Filter também retorna um novo array conforme filtro aplicado
        return state.filter(p => p._id != action.payload.id);

    default:
      return state;
  }
}