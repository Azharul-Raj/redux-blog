import { GET_CONTENT, GET_CONTENTS } from "../actionTypes/actionTypes"

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
        default: return state;
    }
}