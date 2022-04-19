import React from 'react';
// import Search20 from "@carbon/icons-react/lib/search/20";
// import Search from 'carbon-components-react';
import { Logout32, Upload24, UserProfile24, Settings24, Education } from '@carbon/icons-react';
import { Button, Row, Column, Form, TextInput } from "carbon-components-react";

const divStyle = {
    margin: '10px 0 20px 0'
  };


const Settings = () => (<div className="bx--grid" style={divStyle}>
<div className="bx--row"  style={divStyle}>
<Row><h2>Settings</h2></Row>
</div>

<div className="bx--row" style={divStyle}>
<Row><h4>Change Password</h4></Row></div>

<div className="bx--row" ><Form>

        <TextInput
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            labelText="Current Password"
        />

        <TextInput
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            labelText="New Password"
        />

        <TextInput
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            labelText="Confirm New Password"
        />
      
      <Button type="submit" className="some-class"  style={{marginTop: "15px"}}>
        Change Password
      </Button>
    </Form></div>

{/* here i'm going to map the results */}
</div>)

            
            
        
// Settings.Layout = DefaultLayout;

export default Settings;