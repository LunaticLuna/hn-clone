import React from 'react'
import PostCard from './PostCard'

export default function PostList({ posts }){

  return (
    <ul>
      {posts.map((post)=>(
        <li key = {post.id}
            className = 'post-list'>
          <PostCard
            id = {post.id}
            title = {post.title}
            url = {post.url}
            author = {post.by}
            timestamp = {post.time}
            commentNums = {post.descendants}
          />
        </li>
        
        ))}
    </ul>

  )
}