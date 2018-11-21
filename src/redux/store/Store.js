import { createStore } from 'redux';

import Reducers from '../reducers/Reducers';
import {loadState, saveState} from "./LocalState";

const appState = loadState();

const store = createStore(Reducers, appState);

store.subscribe(() => {
   saveState(store.getState());
});



export default store;
