import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { IStore } from "../models/store.model";
import { IBaseAction, SET_ACTIVITIES_LIST, SET_COORDINATORS_LIST } from "./actions";

const defaultState: IStore = {
    activeUserId: 3,
    coordinators: [],
    activities: [],
};

const reducer = (state: IStore = defaultState, action: IBaseAction) => {
    switch (action.type) {
        case SET_COORDINATORS_LIST: return { ...state, coordinators: action.payload }
        case SET_ACTIVITIES_LIST: return { ...state, activities: action.payload }
        default: return state;
    }
}

export const store = createStore(reducer, applyMiddleware(thunk));