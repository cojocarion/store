import {
    GET_USERS,
    USERS_ERROR,
    DELETE_ITEM,
    GET_NEW_ITEMS,
    ADD_ITEM,
} from './actions';
import axios from 'axios';

export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get(
            `https://next.json-generator.com/api/json/get/Eku7UDxq8`
        );

        dispatch({
            type: GET_USERS,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        });
    }
};

export const getNewItems = () => async (dispatch) => {
    try {
        const res = await axios.get(
            `https://next.json-generator.com/api/json/get/EJ1Lrvg98`
        );

        dispatch({
            type: GET_NEW_ITEMS,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        });
    }
};

export const addItem = (value) => (dispatch) => {
    dispatch({
        type: ADD_ITEM,
        payload: value,
    });
};

export const deleteItem = (index) => (dispatch) => {
    dispatch({
        type: DELETE_ITEM,
        payload: index,
    });
};
