import { IPost } from "../types/IPost";
import { fetchBaseQuery,createApi } from "@reduxjs/toolkit/query/react";

export const postAPI = createApi({
    reducerPath:'postAPI',
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000"}),
    tagTypes:['Post'],
    endpoints:(build)=>({
        fetchAllPosts: build.query<IPost[],number>({
            query:(limit:number=10)=>({
                url:'/posts',
                params:{
                    _limit:limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost:build.mutation<IPost,IPost>({
            query:(post)=>({
             url:'/posts',
             method:'POST',
             body:post 
            }),
           invalidatesTags:['Post']
        }),
        updatePost:build.mutation<IPost,IPost>({
            query:(post)=>({
             url:`/posts/${post.id}`,
             method:'PUT',
             body:post 
            }),
           invalidatesTags:['Post']
        }),
        deletePost:build.mutation<IPost,IPost>({
            query:(post)=>({
             url:`/posts/${post.id}`,
             method:'DELETE',
             body:post 
            }),
           invalidatesTags:['Post']
        }),
    })
})