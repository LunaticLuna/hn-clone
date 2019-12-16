import React from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import { fetchItem, fetchComments } from '../utils/api'
import Comment from './Comment'

export default class PostPage extends React.Component{
  state = {
    id:null,
    time:0,
    comments : []
  }
  componentDidMount(){
    const { id } = queryString.parse(this.props.location.search)
    this.setState({
      id
    })
    fetchItem(id)
      .then((post)=>{
        console.log(post)
        const { by, title, kids, descendants, time, url } = post 
        this.setState({
          author: by,
          title,
          kids,
          descendants,
          time,
          url
        })
        return fetchComments(kids)
      })
      .then((comments)=>{
        this.setState({
          comments
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
    const { author, title, kids, descendants, time, url,comments } = this.state 
    const date = new Date(time*1000).toDateString()
    return(
      <div>
        <h1>{title}</h1>
        <div className = 'meta-info'>
          <span>
            By <Link to = {`/user?id=${author}`}>{author}</Link>
          </span>
          <span>
            on {date}
          </span>
          <span>
            with {descendants} comments
          </span>
        </div>
        <ul>
          {comments.map((comment) => (

            <li key = {comment.id}
                className = 'comment'>
              <Comment comment = {comment}/>
            </li>
            ))
          }
        </ul>
      </div>
    )
  }
}