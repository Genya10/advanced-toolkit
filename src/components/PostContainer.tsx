import React from "react";
import { postAPI } from "../services/PostService";
import { PostItem } from "./PostItem";
import { IPost } from "../types/IPost";
import cl from "../styles/PostContainer.module.css";

export const PostContainer = ()=>{
     const {data:posts,error,isLoading} = postAPI.useFetchAllPostsQuery(10);
     const [createPost,{}]=postAPI.useCreatePostMutation();
     const [updatePost,{}]=postAPI.useUpdatePostMutation();
     const [deletePost,{}]=postAPI.useDeletePostMutation();

      const handleCreate = async()=>{
        const title = prompt()
        await createPost({title,body:title} as IPost)
      }
      const handleRemove=(post:IPost)=>{
       deletePost(post)
      }
      const handleUpdate=(post:IPost)=>{
        updatePost(post)
      }

    return(
        <div>
            <div className={cl.postList}>
                <button className={cl.btnMain}
                         onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Loading..</h1>}
                {error && <h1>Error</h1>}
                {posts && posts.map(post=>
                <PostItem key={post.id} 
                          remove={handleRemove}
                          update={handleUpdate}
                          post={post}/>)
                    }
            </div>
        </div>
    )
}