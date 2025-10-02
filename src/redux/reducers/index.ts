import { Action, combineReducers } from 'redux';
import home, { homeInterface } from './home';
export interface RootState {
    home: homeInterface;
}
const appReducer = combineReducers({
    home
    
});
const rootReducer = (state:  RootState | undefined, action: Action<any>) => {
    return appReducer(state, action)
}
export default rootReducer;