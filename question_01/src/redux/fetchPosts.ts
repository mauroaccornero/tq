import { fetchPostsBegin, fetchPostsFailure, fetchPostsSuccess } from './actions';
import {AppDispatch} from "./store.ts";
import {post} from "../types/post.ts";

export function fetchPosts() {
    return (dispatch: AppDispatch) => {
        dispatch(fetchPostsBegin());
        return fetch("https://dummyjson.com/posts?limit=10&skip=0&select=title")
            .then(handleErrors)
            .then(res => res.json())
            .then((json: {posts: post[]}) => {
                dispatch(fetchPostsSuccess(json.posts));
                return json;
            })
            .catch(error => dispatch(fetchPostsFailure(error)));
    };
}

function handleErrors(response: Response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}