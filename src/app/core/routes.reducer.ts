import { Action } from "@ngrx/store";

export function routerReducer(state: string = '', action: Action) {
    if(action.type == '@ngrx/store/init') {
      return state;
    }
    return state = action.type;

}
