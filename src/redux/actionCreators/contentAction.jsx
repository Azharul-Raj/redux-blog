import {
    ADD_CONTENT,
    DELETE_CONTENT,
    GET_CONTENT,
    UPDATE_CONTENT
} from "../actionTypes/actionTypes"


export const getContents = (contents) => {
    return {
        type: GET_CONTENT,
        payload:contents
    }
}

export const addContent = (content) => {
    return {
        type: ADD_CONTENT,
        payload:content
    }
}
export const updateContent = (content) => {
    return {
        type: UPDATE_CONTENT,
        payload:content
    }
}
export const deleteContent = (id) => {
    return {
        type: DELETE_CONTENT,
        payload:id
    }
}