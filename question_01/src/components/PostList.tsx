import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPosts} from "../redux/fetchPosts.ts";
import {state} from "../types/state.ts";
import {AppDispatch} from "../redux/store.ts";

const PostsList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: state) => state.items);
    const loading = useSelector((state: state) => state.loading);
    const error = useSelector((state: state) => state.error);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {users.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
};

export default PostsList;