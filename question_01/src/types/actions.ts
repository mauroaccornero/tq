import {
    FETCH_POSTS_BEGIN,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS
} from "../redux/actionTypes";
import {post} from "./post.ts";

type action_request_start = {
    type: typeof FETCH_POSTS_BEGIN
}

type action_response_success = {
    type: typeof FETCH_POSTS_SUCCESS,
    payload: {
        posts: post[]
    }

}

type action_response_error = {
    type: typeof FETCH_POSTS_FAILURE,
    payload: {
        error: Error
    }
}

export type actions = action_request_start | action_response_success | action_response_error