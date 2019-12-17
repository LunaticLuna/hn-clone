import React from 'react'
import { fetchMainPosts } from '../utils/api'
import PostList from './PostList'
import Loading from './Loading'

export default class Posts extends React.Component{
  state = {
    posts:[],
    error:null,
    loading:true,
  }
  componentDidMount(){
    fetchMainPosts(this.props.type)
      .then((posts)=>{
        this.setState({
          posts,
          loading:false,
        })
      })
      .catch((error)=>{
        console.warn('error fetching repo',error)
        this.setState({
          error:'There was an error fetching repositories',
          loading:false,
        })  
      })
  }
  render(){
    const { posts, loading, error } = this.state
    if (loading === true){
      return <Loading />
    }
    if (error){
      return <p>{error}</p>
    }
    return (
      <PostList posts = {posts} />
    )
  }
}