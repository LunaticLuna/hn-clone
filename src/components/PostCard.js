import React from 'react'
import { Link } from 'react-router-dom'

export default class PostCard extends React.Component{
  render(){
    const { id, title, url, timestamp, commentNums, comments } = this.props 
    return (
      <div>
        {this.props.title}


      </div>

      )
  }
}