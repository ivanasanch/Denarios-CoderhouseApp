import { Data } from "../../Constants/Data";
import { SELECT_DATA, FILTERED_DATA } from "../actions/data.action";
const initialState = {
    data: Data,
    filteredData: [],
    selected:null
}
const DataReducer = (state=initialState, action)=>{
    switch(action.type) {
        case SELECT_DATA:
            return {
                ...state,
                selected: state.data.find(data=> data.id === action.dataID)
            }
        case FILTERED_DATA:
            return{
                ...state,
                filteredData: state.data.filter(data=> data.entity === action.categoryID)
            }
        default:
            return state
    }
    
}
export default DataReducer