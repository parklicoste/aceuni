import React from 'react';
import {UserAvatarFilledAlt32} from '@carbon/icons-react'
import {
    Form,
    TextArea,
    Button,
  } from "carbon-components-react";
// import styles from './styles.css'

// import Search20 from "@carbon/icons-react/lib/search/20";
// import Search from 'carbon-components-react';
import { Logout32, Upload24, UserProfile24, Settings24, Education } from '@carbon/icons-react';
import { Search } from "carbon-components-react";
import { TextInput } from 'carbon-components-react';
import { NumberInput, Row, Column } from 'carbon-components-react';
import Layout from '../../components/layout/Layout';

const divStyle = {
    margin: '0 0 15px 0'
  };
const padStyle = {
    padding: '15px'
}

const Profile = () => (<Layout>
  <div className="bx--grid">
    <div className="bx--row"  style={divStyle}>
    <h2 style={divStyle}>Profiles</h2>
    </div>
    <div className="bx--row" style={divStyle}>
        <Form>
          <TextInput labelText="Email"  placeholder='admin@admin.com' disabled style={divStyle}/>
          <TextInput labelText="Name"  placeholder='admin' style={divStyle}/>
          <NumberInput labelText="Mobile Number" placeholder='1234567890' style={divStyle}/>
          {/* <TextArea labelText="Feedback" placeholder='Start Writing...'/> */}
          <Row style={divStyle}>
              <Column><h8>Contribution:</h8></Column>
              <Column>10 documents</Column>
            </Row> 
           
          
          
          <Button type="submit" className="some-class"  style={divStyle}>
            Save
          </Button>
        </Form>
    </div>

 {/* here i'm going to map the results */}
</div>
</Layout>);

export default  Profile;

