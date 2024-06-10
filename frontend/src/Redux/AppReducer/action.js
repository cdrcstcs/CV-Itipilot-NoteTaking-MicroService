import axios from "../../axios/Axios"
import { getLocalData } from "../../utilis/localStorage"
import * as types from "./actionTypes"

const getDataRequest = () => {
    return { type: types.GET_NOTES_DATA_REQUEST }
}

export const getData = (params) => (dispatch) => {
    dispatch(getDataRequest())
    return axios.get(`/notes`)
        .then((res) => dispatch({ type: types.GET_NOTES_DATA_SUCCESSFUL, payload: { data: res.data.notes, name: res.data.name } }))
        .catch((err) => dispatch({ type: types.GET_NOTES_DATA_FAILURE }))
}

const addDataRequest = () => {
    return { type: types.ADD_NOTES_DATA_REQUEST }
}

export const addData = (payload) => (dispatch) => {
    dispatch(addDataRequest())
    return axios.post("/notes/create", payload)
        .then((res) => dispatch({ type: types.ADD_NOTES_DATA_SUCCESSFUL }))
        .catch((err) => dispatch({ type: types.ADD_NOTES_DATA_FAILURE }))
}

export const updateData = (payload, id) => (dispatch) => {
    dispatch({ type: types.UPDATE_NOTES_DATA_REQUEST })
    return axios.patch(`/notes/update/${id}`, payload)
        .then((res) => dispatch({ type: types.UPDATE_NOTES_DATA_SUCCESS }))
        .catch((err) => dispatch({ type: types.UPDATE_NOTES_DATA_FAILURE }))
}

export const deleteData = (id) => (dispatch) => {
    dispatch({ type: types.DELETE_NOTES_DATA_REQUEST })
    return axios.delete(`/notes/${id}`)
        .then((res) => dispatch({ type: types.DELETE_NOTES_DATA_SUCCESS }))
        .catch((err) => dispatch({ type: types.DELETE_NOTES_DATA_FAILURE }))
}
