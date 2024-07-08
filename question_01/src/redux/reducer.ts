import {FETCH_POSTS_FAILURE, FETCH_POSTS_BEGIN, FETCH_POSTS_SUCCESS} from "./actionTypes.ts";
import {actions} from "../types/actions.ts";
import {state} from "../types/state.ts";

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function postsReducer(state: state = initialState, action:actions) {
    switch(action.type) {
        case FETCH_POSTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.posts
            };

        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
}