import {FETCH_POSTS_BEGIN, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS} from "./actionTypes.ts";
import {post} from "../types/post.ts";

export const fetchPostsBegin = () => ({
    type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = (posts: post[]) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: { posts }
});

export const fetchPostsFailure = (error: Error) => ({
    type: FETCH_POSTS_FAILURE,
    payload: { error }
});