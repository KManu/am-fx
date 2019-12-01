import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailure = '[User] Load Users Failure',
  SetLoginState = '[Login] Set Login State'
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: { error: any }) { }
}

export class SetLoginState implements Action {
  readonly type = UserActionTypes.SetLoginState;
  constructor(public payload: { error: any }) { }
}

export type UserActions = LoadUsers | LoadUsersSuccess | LoadUsersFailure | SetLoginState;

