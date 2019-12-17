import React from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import { fetchItem, fetchComments } from '../utils/api'
import Comment from './Comment'
import Loading from './Loading'

export default class PostPage extends React.Component{
  state = {
    id: queryString.parse(this.props.location.search).id,
    comments:[],
    loading : true,
    infoLoading:true
  }
  componentDidMount(){
    fetchItem(this.state.id)
      .then((post)=>{
        console.log(post)
        const { by, title, kids, descendants, time, url } = post 
        this.setState({
          author: by,
          title,
          descendants,
          time,
          url,
          infoLoading:false
        })
        return fetchComments(kids)
      })
      .then((comments)=>{
        this.setState({
          comments,
          loading:false
        })
      })
      .catch((error)=>{
        console.warn('error fetching repo',error)
        this.setState({
          error:'There was an error fetching repositories',
          loading:false
        })  
      })
  }
  render(){
    const { author, title, descendants, time, url,comments,loading,infoLoading } = this.state 
    const date = new Date(time*1000).toDateString()
    return(
      <div>
        {infoLoading === true ? <Loading text = 'Loading Post Info'/>
          : <div >
              <a className = 'postpage-title' href = {url} >{title}</a>
              <div className = 'meta-info'>
                <span>
                  By <Link to = {`/user?id=${author}`}
                            className = 'meta-info-link'>{author}</Link>
                </span>
                <span>
                  on {date}
                </span>
                <span>
                  with {descendants} comments
                </span>
              </div>
            </div>
          }
      
        {loading === true ? <Loading text = 'Loading Comments'/>
            : <ul>
                {comments.map((comment) => (

                  <li key = {comment.id}
                      className = 'comment'>
                    <Comment comment = {comment}/>
                  </li>
                  ))
                }
              </ul>
        }
        
      </div>
    )
  }
}