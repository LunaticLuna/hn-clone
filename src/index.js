
import React from 'react'
import ReactDom from 'react-dom'
import Posts from './components/Posts'
import PostPage from './components/Post'
import Nav from './components/Nav'
import User from './components/User'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'



class App extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <Nav />
          <Route path = '/' exact render = {()=><Posts type = 'top' />} />
          <Route path = '/new'  render = {()=><Posts type = 'new' />} />
          <Route path = '/user' component = {User} />
          <Route path = '/post' component = {PostPage} />
        </div>
      </Router>


      )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
)