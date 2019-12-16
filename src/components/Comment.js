import React from 'react'
import { Link } from 'react-router-dom'
export default class Comment extends React.Component{
  state = {
    comment:this.props.comment
  }
  render(){
    const { by, text, time} = this.state.comment
    const date = new Date(time*1000).toDateString()
    return(
      <React.Fragment>
        <div className = 'meta-info'>
          by <Link className = 'meta-info-link' to = {`/user?id=${by}`}>
            {by}</Link>
        </div>
        <p dangerouslySetInnerHTML={{__html: text}} />
      </React.Fragment>
    )
  }
}