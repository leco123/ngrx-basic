import { createAction, props, Action } from '@ngrx/store';
import { Person } from '../person';

export enum PersonActionTypes {
    PERSON_ALL = '[PERSON_ALL] Get all people',
    PERSON_NEW = '[PERSON_NEW] Add new Person',
    PERSON_UPDATE = '[PERSON_UPDATE] Update a Person',
    PERSON_DELETE = '[PERSON_DELETE] Delete a Person'
}

export class personAll implements Action {
    readonly type = PersonActionTypes.PERSON_ALL;
}

export class personNew implements Action {
    readonly type = PersonActionTypes.PERSON_NEW;
    constructor(public payload: {person: Person}){}
}

export class personUpdate implements Action {
    readonly type = PersonActionTypes.PERSON_UPDATE;
    constructor(public payload: {person: Person}){}
}

export class personDelete implements Action {
    readonly type = PersonActionTypes.PERSON_DELETE;
    constructor(public payload: {id: string}){}
}

export type PersonActions = personAll | personNew | personUpdate | personDelete;