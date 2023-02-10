import {
    ADD_CONTENT,
    ADD_READING_COUNT,
    ADD_TO_READING,
    DELETE_CONTENT,
    GET_CONTENT,
    GET_CONTENTS,
    UPDATE_CONTENT
} from "../actionTypes/actionTypes"


export const getContents = (contents) => {
    return {
        type: GET_CONTENTS,
        payload:contents
    }
}

export const getContent = (content) => {
    return {
        type: GET_CONTENT,
        payload:content
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
export const addToReading = (content) => {
    return {
        type: ADD_TO_READING,
        payload:content
    }
}

export const addReadingCount = (id) => {
    return {
        type: ADD_READING_COUNT,
        payload:id
    }
}