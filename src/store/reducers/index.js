import { combineReducers } from 'redux';
// Imports: Reducers
import auth from './auth'
import apps from './apps'
import forms from './forms'

// Redux: Root Reducer
const rootReducer = combineReducers({
    auth,
    apps,
    forms,
});
// Exports
export default rootReducer;