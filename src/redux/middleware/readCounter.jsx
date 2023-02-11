
import { ADD_READING_COUNT } from "../actionTypes/actionTypes";

const readCounter = (store) => (next) => (action) => {
    
    // if (action.type === ADD_READING_COUNT) {
    //     const newAction = {            
    //             ...action,
    //             payload:{...action.payload}            
    //     }
    //     return next(newAction);
    // }
    return next(action)
}
export default readCounter;