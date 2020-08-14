import { Person } from '../person';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';

// ESTADO DA APLICAÇÃO
export interface AppState {
    people: Person[];
}

// LINKAR people da interface AppState com reducer
// Função de tratamento para receber as actions 

export const appReducers : ActionReducerMap<AppState> = {
    //qual reducer que está relacionado a este people
    people: fromPersonReducer.reducer
}

export const selectPeople = (state: AppState) => state.people;
/*
export const selectPeopleCount =  createSelector(
    selectPeople,
    (people) => people.length
);

export const selectPeopleCount2 =  createSelector(
    selectPeopleCount,
    (n) => n+1
);
*/