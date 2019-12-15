import React from 'react'
import ReactDom from 'react-dom'
import Posts from './components/Posts'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'



class App extends React.Component{
  render(){
    return (
      <Router>
        <Nav />
        <Route path = '/' exact render = {()=><Posts type = 'top' />} />
        <Route path = '/new'  render = {()=><Posts type = 'new' />} />
       

      </Router>


      )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
)