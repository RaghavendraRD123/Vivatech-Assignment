/*
Store : 
to store the data and use the data whenever and wherever required
*/

import {legacy_createStore} from 'redux';
import { Reducer } from './Reducer';

const Store = legacy_createStore(Reducer);

export {Store};