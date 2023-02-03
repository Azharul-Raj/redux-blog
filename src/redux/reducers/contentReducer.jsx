import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, GET_CONTENTS } from "../actionTypes/actionTypes"

const initialState = {
    contents: [],
    content:{}
}

export const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENTS: return {
            ...state,
            contents: action.payload
        }
        case GET_CONTENT: return {
            ...state,
            content:action.payload
        }
        case ADD_CONTENT: return {
            ...state,
            contents:[...state.contents,action.payload]
        }
        case DELETE_CONTENT: return {
            ...state,
            contents:state.contents.filter(content=>content._id!==action.payload)
        }
        default: return state;
    }
}