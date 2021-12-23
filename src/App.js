import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './views/Login'
import Logout from './views/Logout'
import Home from './views/Home'
import ProtectedRoute from './components/ProtectedRoute.js'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {
  constructor(){
    super();
    this.state={
      // test:"This is a test",
      user:'',
      token:'',
      name:'',
    }
  }


  setUser = (user) =>{
    this.setState({user})
  }

 

  setToken = (token) =>{
      this.setState({token})
      localStorage.setItem('token',token)
  }


static getDerivedStateFromProps = (props,state)=>{
  return {"token":localStorage.getItem('token')}
}


  render() {
    return (
      <div>
        <NavBar 
        token={this.state.token}
        username={this.state.username}
        />
        <Routes>

        

          

          <Route path='/' element={
            <ProtectedRoute token={this.state.token}>
              <Home token={this.state.token} setToken={this.setToken}/>
            </ProtectedRoute>
            }/>


          <Route path='/logout' element={
            <ProtectedRoute token={this.state.token}>
              <Logout setToken={this.setToken}/>
            </ProtectedRoute>
            }/>

          

            <Route path = '/login' element={
              <Login setToken={this.setToken} token={this.state.token} setName={this.setName}/>
            }/>
          </Routes>
        </div>
      );
    }
  }

