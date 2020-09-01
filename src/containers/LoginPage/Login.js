import React from 'react';
import "./Login.css";

class Login extends React.Component {

    state ={error:false, type:"sign"}
    
    componentDidMount(){
        document.body.className="login-body";// Set the style
    }

    handleSubmit = e => {
        e.preventDefault();
        if (e.target.name.value === "testuser" && e.target.pass.value === "testuser") {
            window.location.href = "/home";
        } else {
            this.setState({error:true})
        }
    }

    render() {

    return (
    <div>
        <div style={{float:"left",width:"50%"}}>
  <div className="main">
    <div style={{float:"left",width:"30%",marginLeft:"20%"}}>
    <button onClick = {e => this.setState({type:"sign"})} className="sign" align="center">Log In</button>
    </div>
    <div style={{float:"left",width:"30%"}}>
    <button onClick = {e => this.setState({type:"join"})} className="sign" align="center">Quick Join</button>
    </div>
    { this.state.type === "sign" && 
    <form className="form1" onSubmit={this.handleSubmit}>
    { this.state.error && 
    <div className="error">
        <p style={{color:"red"}}>Wrong Username and Password. Please try again.</p>   
    </div>
    }
      <input className="un " type="text" align="center" placeholder="Username" name="name"/>
      <input className="pass" type="password" align="center" placeholder="Password" name="pass"/>
      <button className="submit" type="submit" align="center">Sign in</button>
      <p className="forgot" align="center"><a href="/">New Joiner? Register Here!</a></p>
    </form>    
    }    

    { this.state.type === "join" && 
    <form className="form1" onSubmit={this.handleSubmit2}>
      <input className="un " type="text" align="center" placeholder="Room ID" name="name"/>
      <button className="submit" type="submit" align="center">Join</button>
      <p className="forgot" align="center"><a href="/">New Joiner? Register Here!</a></p>
    </form>    
    }    

    
    </div>
    </div>
    <div style={{float:"right",width:"50%",marginTop:"20%"}}>
        <h1 style= {{fontFamily: "Montserrat",fontWeight: "800",fontSize: "96px",color:"white"}}>Workout Party</h1>
    </div>
    </div>
    )    
    }



}

export default Login;