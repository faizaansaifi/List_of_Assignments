import React,{Component} from 'react';
import { withRouter } from 'react-router';

class Login extends Component{
    state=  {
        user:"alpha",
        pass:'7788',
        temp_u: "",
        temp_p:"",
        valid:0
    }

    onHandleChange=(event)=>{
        this.setState({
            temp_u:event.target.value

        });
    };
    passInput=(event)=>{
        this.setState({
            temp_p:event.target.value
        })
    }


    onLogin=(event)=>{
        event.preventDefault();
        const { user, temp_u,pass,temp_p} = this.state;

        const u_matches = user === temp_u;

        const p_matches= pass===temp_p;

        u_matches && p_matches?this.setState({valid:true}):alert("Username or Password may be Incorrect");
        this.props.history.push('/books')

        console.log(this.props);
    }

    render() {
        return(
            <div>
                <div className={'photoContainer'}>
                    Photo Container
                </div>
                <form onSubmit={(event)=>this.onLogin(event)}>
                    <input type={'text'}
                           placeholder={"Username"}
                           name={"username"}
                           onChange={this.onHandleChange}/>
                    <input type={'password'}
                           placeholder={'Password'}
                           name={"password"}
                           onChange={this.passInput}/>
                    <button type={'submit'}>Login</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);
