//Create login component in react 
//create username and password fields with placeholders and login button
//make post api call to backend url-http://localhost:8000/login using axios 
//add regex validations to username it should contain minimum 8 characters
//add regex validations to password it should contain minimum 8 characters,atleat one number,atleast one special character


import React, { Component }
    from 'react';
    import axios from 'axios';
   
    
    


   const Login =()=>{

    const [username,setUsername] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [redirect,setRedirect] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/login', {
            username: username,
            password: password
        })
            .then(function (response) {
                console.log(response);
                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    setRedirect(true);
                }
                else {
                    alert("Invalid Credentials");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

   

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    
                   
                    
                </div>
                
            </form>
            
        </div>
        
    );
    }
    export default Login;

                  




   





