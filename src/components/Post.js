import React from 'react'
import queryString from 'query-string'

export default class PostPage extends React.Component{
  state = {
    id:null
  }
  componentDidMount(){
    const { id } = queryString.parse(this.props.location.search)
    this.setState({
      id
    })
  }
  render(){
    return(
      <div>{this.state.id}</div>
    )
  }
}