import React from 'react';
import Head from 'next/head';
import Image from 'next/image'
import { ButtonSet, Link, AspectRatio, TextInput, FormGroup, Button, Grid, Row, Column  } from "carbon-components-react";
import { Education32, ArrowRight16 } from '@carbon/icons-react';
// import background from '../../public/img/feather.png'
// import Login from './Login.sass'
import Signup from './modals/SignUp'
import ForgotPassword from './modals/ForgotPassword'

var SHA256 = require("crypto-js/sha256");

export const sendPasswordHash = (password) => {
    var hash = SHA256(password)
    var x = ""
    for (let i in hash['words'])
        x+=hash['words'][i]
    console.log("MY HASH IS: ", x)
    return x
}

class Login extends React.Component{

    constructor(props)
    {
        super(props);

        this.handleShowSignup = this.handleShowSignup.bind(this);
        this.handleCloseSignup = this.handleCloseSignup.bind(this);

        this.handleShowForget = this.handleShowForget.bind(this);
        this.handleCloseForget = this.handleCloseForget.bind(this);

        this.state = {
            username: "",
            password: "",
            showModalSignup: false,
            showModalForget: false,
            title: "Hello"
        }
    }

    // handleOpenSignup() {
    //     this.setState({ showModal: true,
    //     title: "Sign Up" });
    // }

    // handleForgotPassword() {
    //     this.setState({ showModal: true,
    //         title: "Forgot Password" });
    // }

    handleCloseSignup() {
        this.setState({ showModalSignup: false});
      }
      
      handleShowSignup() {
        this.setState({ showModalSignup: true });
      }

      handleCloseForget() {
        this.setState({ showModalForget: false});
      }
      
      handleShowForget() {
        this.setState({ showModalForget: true });
      }

      handleLogin() {
          if (this.state.username == "admin@admin.com" && password == "admin"){
                //authenticated
          }
      }

      setPassword(pwd) {
        this.setState({
            password: pwd
        })
      }

      setUsername(uname){
            this.setState({
                username: uname
            })
      }
    
    render(){
        return <Grid fullWidth style={{ 
            // backgroundImage:  "url(login_img.png)" 
          }}>
            <Head  >
                <title>ACEUNI!</title>
            </Head>
        
            
            <Row  style={{ margin: '2rem 2rem 2% 30%', whiteSpace: 'nowrap', borderTopWidth: '0px'}} >
                <h1 style={{textAlign: 'center'}}>
                <Education32 /> Welcome to the <a href="https://github.com/parklicoste/aceuni/" target="_blank">ACEUNI!</a> <Education32 />
                </h1>
            </Row>
            <Row style={{ margin: '0 0 0 0', whiteSpace: '', borderTopWidth: '0px', height: '450px' }}>
                <Column md={4} style={{ margin: '2rem 0 0 0'}}>
                        <h2 style={{ margin: '0 0 1rem 42%' }} >About</h2>
                    <AspectRatio ratio="1x1"  >
                        <p style={{ padding: '2rem 5rem 0 5rem'}}>Hello My name is Khushal Singh, A 4th year compter science student, who is building full stack web application to help the students all around the world in universities, colleges, and students. Currently, I'm working under the supervision of Lou Nel Professor. This is the COMP4905 Honors project. <br></br>Thank You. </p>
                    
                    </AspectRatio>
                </Column>

                <Column md={4} style={{ margin: '2rem 0rem 0 0', alignItems: 'left'}}>
                    <AspectRatio ratio="1x1">
                        <h2 style={{ margin: '0 0 1rem 30%' }}> Sign In</h2>
                        <FormGroup legendId="formgroup-legend-id"
  legendText="" className='test' style={{ maxWidth: '75%', padding: '20px 20px 0px 100px' }}>

                            <TextInput id="one" labelText="Email" style={{ marginBottom: '1rem' }} value={this.state.username} onChange={e => { this.setUsername(e.currentTarget.value); }} />
                            
                            <TextInput type="password" id="two" labelText="Password" requiredpattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" style={{ marginBottom: '1rem' }} value={this.state.password} onChange={e => { this.setPassword(e.currentTarget.value); }}
/>
                            <Button style={{ margin: '0.5rem 100px', width: '100%', maxWidth: '12.25rem' }} isExpressive renderIcon={ArrowRight16} hasIconOnly iconDescription="Arrow right" kind="primary" onClick={(e)=>this.handleLogin(e) } href='/homepage'>Login</Button>
                        </FormGroup>
                        <ButtonSet style={{padding: '10px 20px 0px 100px'}}>

                            <Button style={{margin: '0 5px 5px 1px'}} kind="secondary" onClick={()=>this.handleShowForget()}>Forgot Password?</Button>

                            <Button style={{margin: '0 15px 5px 15px'}}kind="ghost" onClick={()=>this.handleShowSignup()}>Don't have an account? Sign up!</Button>

                            {this.state.showModalSignup ? <Signup handleCloseSignup={this.handleCloseSignup} passwordHash={sendPasswordHash}/> : null}

                            {this.state.showModalForget ? <ForgotPassword handleCloseForget={this.handleCloseForget} /> : null}
                            
                        </ButtonSet>
                    </AspectRatio>    
                </Column>
            </Row>
            <Row style={{ margin: '0 10% 0 10%', whiteSpace: 'nowrap', borderTopWidth: '0px' }}>
                <Image src={`/img/login.png`} alt="logo" width={1200} height={400} /> 
            </Row>

            <Row style={{ margin: '2rem 2rem 5% 30%', whiteSpace: 'nowrap', borderTopWidth: '0px' }} >
                <h6 style={{textAlign: 'center'}}>
                    Copyright@ Khushal Kumar Singh <br></br>
                    4th Year Honors Projects for Carleton University
                </h6>
            </Row>
        </Grid>
    }

}

export default  Login;