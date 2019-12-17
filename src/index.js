
import React from 'react'
import ReactDom from 'react-dom'
import Posts from './components/Posts'
import PostPage from './components/Post'
import Nav from './components/Nav'
import User from './components/User'
import { ThemeProvider } from './context/Theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'



class App extends React.Component{
  state = {
    theme: 'light',
    toggleTheme : ()=>{
      this.setState(({theme})=>({
          theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }
  render(){
    return (
      <ThemeProvider value = {this.state} >
        <Router>
          <div className = {this.state.theme}>
            <div className = "container">
              <Nav />
              <Route path = '/' exact render = {()=><Posts type = 'top' />} />
              <Route path = '/new'  render = {()=><Posts type = 'new' />} />
              <Route path = '/user' component = {User} />
              <Route path = '/post' component = {PostPage} />
            </div>
          </div>
        </Router>
      </ThemeProvider>
      )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
)