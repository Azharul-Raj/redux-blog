import { ADD_CONTENT, ADD_READING_COUNT, ADD_TO_READING, DELETE_CONTENT, GET_CONTENT, GET_CONTENTS } from "../actionTypes/actionTypes"

const initialState = {
    contents: [],
    readingList:[],
    content: {},
    count:0
}

export const contentReducer = (state = initialState, action) => {
    const inReadingList = state.readingList.find(content => content._id === action.payload._id);
    const newList=state.readingList.filter(content=>content._id!==action.payload);
    let count = 0;
    const item = state.readingList.find(content => content._id === action.payload);
    
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
        case ADD_TO_READING:
            if(!inReadingList) return {
            ...state,
            readingList:[...state.readingList,action.payload]
            }
            case ADD_READING_COUNT: return {
                ...state,
                ...state.count+1,
            readingList: [...newList, { ...item, count: state.count }],            
        }
        default: return state;
    }
}