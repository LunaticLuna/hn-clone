import React from 'react'

export default class Loading extends React.Component{
  state = {
    text:this.props.text
  }
  componentDidMount(){
    const {text,speed} = this.props
    this.interval = window.setInterval(()=>{
      this.state.text === text + '...'
        ? this.setState({text})
        : this.setState(({text})=>({text:text+'.'}))

    },speed)
  }
  componentWillUnmount(){
    window.clearInterval(this.interval)
  }
  render(){
    return (
      <p className = 'loading'>{this.state.text}</p>
    )
  }
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}