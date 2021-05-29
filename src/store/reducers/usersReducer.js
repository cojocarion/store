import {
    GET_USERS,
    DELETE_ITEM,
    GET_NEW_ITEMS,
    ADD_ITEM,
} from '../actions/actions';

const initialState = {
    users: [],
    newItems: [],
    loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };

        case GET_NEW_ITEMS:
            return {
                ...state,
                newItems: action.payload,
                loading: false,
            };

        case ADD_ITEM:
            return {
                ...state,
                users: [...state.users, action.payload],
            };

        case DELETE_ITEM:
            return {
                ...state,
                users: state.users.filter(
                    (item) => item._id !== action.payload
                ),
            };
        default:
            return state;
    }
}
