import React from 'react';
import Head from 'next/head';
import Image from 'next/image'
import { ButtonSet, Link, AspectRatio, TextInput, FormGroup, Button, Grid, Row, Column  } from "carbon-components-react";
import { Education32 } from '@carbon/icons-react';
// import background from '../../public/img/feather.png'


class Login extends React.Component{
    
    render(){
        return <Grid fullWidth style={{ 
            // backgroundImage:  "url(login_img.png)" 
          }}>
            <Head  >
                <title>ACEUNI!</title>
            </Head>
        
            
            <Row  style={{ margin: '2rem 2rem 2% 30%' }} >
                <h1 style={{textAlign: 'center'}}>
                <Education32 /> Welcome to the <a href="https://github.com/parklicoste/aceuni/" target="_blank">ACEUNI!</a> <Education32 />
                </h1>
            </Row>
            <Row style={{ margin: '0 0 -27% 0', position: 'relative', display: 'flex' }}>
                <Column md={4} style={{ margin: '2rem 0 0 0'}}>
                        <h2 style={{ margin: '0 0 1rem 42%' }} >About</h2>
                    <AspectRatio ratio="1x1"  >
                        <p style={{ padding: '2rem 5rem 0 5rem'}}>Hello My name is Khushal Singh, A 4th year compter science student, who is building full stack web application to help the students all around the world in universities, colleges, and students. Currently, I'm working under the supervision of Lou Nel Professor. This is the COMP4905 Honors project. <br></br>Thank You. </p>
                    
                    </AspectRatio>
                </Column>

                <Column md={4} style={{ margin: '2rem 0 0 0' }}>
                    <AspectRatio ratio="1x1">
                        <h2 style={{ margin: '0 0 1rem 20%' }}> Sign In</h2>
                        <FormGroup className='test' style={{ maxWidth: '400px', padding: '20px 20px 0px 0px' }}>
                            <TextInput id="one" labelText="Username or Email" style={{ marginBottom: '1rem' }} />

                            <TextInput type="password" id="two" labelText="Password" requiredpattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" style={{ marginBottom: '1rem' }} />
                            <Button>Login</Button>
                        </FormGroup>
                        <ButtonSet>
                            <Button style={{margin: '0 5px 5px 1px'}} kind="secondary">Forgot Password?</Button>
                            <Button style={{margin: '0 15px 5px 15px'}}kind="ghost">Don't have an account? Sign up!</Button>
                        </ButtonSet>
                        {/* <Link style={{padding: '0 15px 5px 5px'}}>Forgot Password?  </Link>
                        <Link style={{padding: '0 5px 5px 15px'}} ></Link> */}
                    </AspectRatio>    
                </Column>
            </Row>
            <Row style={{ display: 'flex', whiteSpace: 'normal' }}>
                <Image src={`/img/login.png`} alt="logo" width={1200} height={400} /> 
            </Row>
            <Row style={{ margin: '2rem 2rem 5% 30%' }} >
                <h6 style={{textAlign: 'center'}}>
                    Copyright@ Khushal Kumar Singh <br></br>
                    4th Year Honors Projects for Carleton University
                </h6>
            </Row>
        </Grid>
    }

}

export default  Login;