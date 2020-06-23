import React, { Component } from "react";
import axios from "axios";

export class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: ""
        };

        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUser = e => {
        this.setState({username: e.target.value})
        console.log(this.state.username)
    }

    handleChangeEmail = e => {
        this.setState({email: e.target.value})
        console.log(this.state.email)
    }

    handleChangePassword = e => {
        this.setState({password: e.target.value})
        console.log(this.state.password)
    }

    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.username);
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post ('http://localhost:5000/user/signup', newUser)
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)});
        
    }
    
    render() { return (<div className="text-center joinus-page" data-gr-c-s-loaded="true">

    <h1 className="joinus-title h3 mb-3 font-weight-normal">Join our Big Family!</h1>

    <form onSubmit={this.handleSubmit} className="login-form">
        <input 
            onChange={this.handleChangeUser}
            type="username" 
            id="inputUsername" 
            class="form-control" 
            placeholder="@username" 
            value={this.state.username}
            required autoFocus
        />

        <input 
            onChange={this.handleChangeEmail}
            type="email" 
            id="inputEmail" 
            class="form-control" 
            placeholder="Email address" 
            value={this.state.email}
            required
        />
        
        <input 
            onChange={this.handleChangePassword}
            type="password" 
            id="inputPassword" 
            class="form-control" 
            placeholder="Password" 
            value={this.state.password}
            required
        />
        
        <input 
            type="password" 
            id="inputConfirmPassword" 
            class="form-control" 
            placeholder="Confirm password"
            required
        />
        
        <button type="submit" className="btn btn-lg btn-info btn-block">Create an account</button>
        <p class="mt-5 mb-3 text-muted">Copyright © 2020</p>

    </form>
</div>);
}
}

