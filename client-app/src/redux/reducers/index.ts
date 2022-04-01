import { combineReducers } from "redux";
import { tasksReducer } from './tasksReducer';

const reducers = combineReducers({
    tasks : tasksReducer
});

const rootReducer = (state : any , action : any) => {
    return reducers(state, action);
}

export default rootReducer;

export type State = ReturnType<typeof reducers>;