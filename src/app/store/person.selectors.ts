import * as fromPersonReducer from './person.reducer';
import { createFeatureSelector } from '@ngrx/store';

// Criar seletores usando adapter 
export const peopleState = 
    createFeatureSelector<fromPersonReducer.PeopleState>('people');


export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal } = fromPersonReducer.peopleAdapter.getSelectors(peopleState);    

