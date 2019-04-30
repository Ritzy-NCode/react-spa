import React ,{Component} from 'react';
export default class Login extends Component{
    constructor(props){
        super(props);        
    }

    loginHandler = event =>{
        event.preventDefault();
        alert('Thanks for submitting');
        this.props.history.push('/cars');
    }

    render(){
        return(
            <div>
                  <h2>Login Form</h2>
                <form className="container bg-danger" 
                            onSubmit={(e)=>this.loginHandler(e)}>
                    User Name : <input type="text" defaultValue="Murthy" />
                    <br /><br />
                    Password : <input type="password" defaultValue="welcome" />
                    <br />
                    <input type="submit" className="btn btn-primary"             
                    value="Login"/>
                </form>

            </div>
        )
    }
}