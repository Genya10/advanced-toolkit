import React from "react";
import { postAPI } from "../services/PostService";

export const PostContainer = ()=>{
     const {data} = postAPI.useFetchAllPostsQuery('')
    return(
        <div>
            <div className="post_list"></div>
        </div>
    )
}