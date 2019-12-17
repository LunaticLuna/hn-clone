import React from 'react'
import queryString from 'query-string'
import { fetchUser, fetchPosts } from '../utils/api'
import PostList from './PostList'
import Loading from './Loading'

export default class User extends React.Component{
  state = {
    id: null,
    error:null,
    posts:[],
    loadingUser:true,
    loadingPosts:true

  }
  componentDidMount(){
    const { id } = queryString.parse(this.props.location.search)
    this.setState({
      id,  
    })

    fetchUser(id)
      .then((user)=>{
        // console.log(user)
        const {about,created,karma,submitted} = user
        this.setState({
          about,
          created,
          karma,
          loadingUser:false
        })
        return fetchPosts(submitted)
      })
      .then((posts) =>{
        // console.log(posts)
        this.setState({
          posts,
          loadingPosts:false
        })
      })
      .catch((error)=>{
        console.warn('error fetching user info',error)
        this.setState({
          error:'There was an error fetching user info',
        })  
      })

  }
  render(){
    const { id, about, created, karma, posts,loadingUser,loadingPosts,error } = this.state
    if (error){
      return <p>{error}</p>
    }
    const date = new Date(created*1000).toDateString();
    return(
      <div>
        <div className = 'user-info'>
          <h1>{id}</h1>
          {loadingUser === true ? <Loading text = 'Loading User Information' />
              : <div className = 'meta-info'>
                  <span>
                    Joined {date},
                  </span>
                  <span>
                    has {karma} karma
                  </span>
                </div>
            }
          
          <p dangerouslySetInnerHTML={{__html: about}} />
        </div>
        <h2 style = {{marginTop:'40px'}}>Posts</h2>
        {loadingPosts === true ? <Loading text='Loading User Posts'/>
          : <PostList posts = {posts} />}
        
        
      </div>
    )
  }
}