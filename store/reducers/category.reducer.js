import { Entity } from "../../Constants/Entities";
import { categoryTypes } from "../types/category.types";
const { SELECT_CATEGORY } = categoryTypes;

const initialState = {
    categories: Entity,
    selected:null
}
const CategoryReducer = (state= initialState, action) => {
   switch(action.type){
    case SELECT_CATEGORY:
        const IndexCategory=state.categories.findIndex(cat => cat.id === action.categoryID)
        if (IndexCategory === -1) return state
        return{...state, selected: state.categories[IndexCategory]}
        default:
        return state
    }
}
export default CategoryReducer