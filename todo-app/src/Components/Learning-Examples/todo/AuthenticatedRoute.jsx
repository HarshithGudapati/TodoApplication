import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js'
class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
            //console.log(this.props)
            return <Route  {...this.props}/>
        }
        else{
            return <Redirect to="/login"/>
        }
    }
}
export default AuthenticatedRoute