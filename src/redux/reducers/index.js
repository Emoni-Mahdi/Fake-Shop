import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducers";


export const reducers = combineReducers({
    altProducts : productReducer,
    product : selectedProductReducer,
});