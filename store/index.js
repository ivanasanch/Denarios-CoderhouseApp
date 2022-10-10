import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducers/category.reducer";
import DataReducer from "./reducers/data.reducers";
const RootReducer=combineReducers({
    categories: CategoryReducer,
    data:DataReducer
})
export default createStore(RootReducer)