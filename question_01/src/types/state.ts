import {post} from "./post.ts";


export type state = {loading: boolean, error: Error | null, items: post[]}