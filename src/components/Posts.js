import React from 'react'
import { Link } from 'react-router-dom'
import { fetchMainPosts } from '../utils/api'
import PostCard from './PostCard'

export default class Posts extends React.Component{
  state = {
    posts:[],
    error:null,
  }
  componentDidMount(){
    fetchMainPosts(this.props.type)
      .then((posts)=>{
        this.setState({
          posts
        })
      })
      .catch((error)=>{
        console.warn('error fetching repo',error)
        this.setState({
          error:'There was an error fetching repositories'
        })  
      })
  }
  render(){
    const { posts } = this.state
    // const date = new Date(timestamp).toDateString();
    console.log(posts)
    return (
      <ul>
        {posts.map((post)=>(
          <li key = {post.id}>
            <PostCard
              title = {post.title}
              url = {post.url}
              author = {post.by}
              timestamp = {post.time}
              commentNums = {post.descendants}
              comments = {post.kids}
            />
          </li>
          
          ))}
      </ul>

    )
  }
}