import React from 'react';
import Image from 'next/image'
import { Modal, Select, SelectItem, ButtonSet, Link, AspectRatio, TextInput, FormGroup, Button, Grid, Row, Column  } from "carbon-components-react";

const PasswordProps = {
    className: 'some-class',
    id: 'test3',
    labelText: 'Password',
  };
  
  const InvalidPasswordProps = {
    className: 'some-class',
    id: 'test4',
    labelText: 'Password',
    invalid: true,
    invalidText:
      'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.',
  };
  


  const Signup = (props) => ( 
                <Modal modalHeading={props.title}
                  primaryButtonText="Submit"
                  secondaryButtonText="Cancel"
                  open={open}
                  onRequestClose={() => props.handleClose()}>
                     {/* onHide={props.handleClose()}> */}
                  <TextInput id="one" required labelText="Email" style={{ marginBottom: '1rem' }} />
                  
                  { props.title === "Sign Up" ? <TextInput type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"{...PasswordProps}/> : null}
                  { props.title === "Sign Up" ? <TextInput type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" {...InvalidPasswordProps}    /> : null}
                  { props.title === "Sign Up" ? <Select id="select-1" defaultValue="us-south" labelText="Occupation">
320              <SelectItem value="student" text="Student" />
321              <SelectItem value="teacher" text="Teacher" />
322            </Select> : null }

        </Modal>)

export default  Signup;
    
