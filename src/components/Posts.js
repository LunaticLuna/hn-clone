import React from 'react'
import { Link } from 'react-router-dom'
import { fetchMainPosts } from '../utils/api'
import PostList from './PostList'

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

    return (
      <PostList posts = {posts} />

    )
  }
}