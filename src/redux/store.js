import {combineReducers, createStore} from "redux";
import MusicTrackReducer from "./musicTrack-reducer";
import React from "react";
import UsersReducer from "./Users-reducer";

let reducers = combineReducers({Users: UsersReducer, musicTrack: MusicTrackReducer});


let store = createStore(reducers);


export default store;