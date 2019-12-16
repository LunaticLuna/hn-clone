import React from 'react'
import { Link } from 'react-router-dom'

export default class PostCard extends React.Component{
  render(){
    const { id, title, url, author, timestamp, commentNums, comments } = this.props 
    const date = new Date(timestamp*1000).toDateString();
    return (
      <React.Fragment>
        <div className = 'title'>
          <a href = {url}> 
            {title}
          </a>
        </div>
        <div className = 'meta-info'>
          <span>
            By <Link className = 'meta-info-link' to = {`/user?id=${author}`} >
              {author}
            </Link>
          </span>
          <span>
            on {date}
          </span>
          <span>
            with <Link className = 'meta-info-link' to = {`/post?id=${id}`} >
              {commentNums}
            </Link> comments
          </span>
        </div>
      </React.Fragment>
      

      )
  }
}