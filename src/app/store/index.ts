import { Person } from '../person';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';

// ESTADO DA APLICAÇÃO
export interface AppState {
    people: fromPersonReducer.PeopleState;
}

// LINKAR people da interface AppState com reducer
// Função de tratamento para receber as actions 

export const appReducers : ActionReducerMap<AppState> = {
    //qual reducer que está relacionado a este people
    people: fromPersonReducer.reducer
}
