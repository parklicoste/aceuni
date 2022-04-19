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

import Layout from '../../../src/components/layout';

const divStyle = {
    marginTop: '15px'
  };

const Help = () => (<div className="bx--grid">
    <div className="bx--row"  style={divStyle}>
    <h2 style={divStyle}>Our Mission</h2>
    </div>
    <div className="bx--row " style={divStyle}>
        <div className="bx--col" style={divStyle}>
        <p>
        Provide helping material to students.
        ctor elit sed vulputate mi.
        Sit amet est placerat in egestas erat. Senectus et netus et malesuada fames ac turpis. Non odio euismod lacinia at
        quis. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Quam pellentesque nec nam aliquam
        sem. Tortor at auctor urna nunc id cursus metus aliquam. Fames ac turpis egestas maecenas. Auctor urna nunc id
        cursus metus aliquam eleifend. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dolor morbi non
        arcu risus quis varius quam quisque id. Eget velit aliquet sagittis id consectetur. Tortor vitae purus faucibus
        ornare suspendisse sed nisi lacus sed. Convallis aenean et tortor at risus viverra adipiscing at in.
        </p>
        </div>
        {/* <div className="bx--col"><p>
        Provide helping material to students.
        ctor elit sed vulputate mi.
        Sit amet est placerat in egestas erat. Senectus et netus et malesuada fames ac turpis. Non odio euismod lacinia at
        quis. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Quam pellentesque nec nam aliquam
        sem. Tortor at auctor urna nunc id cursus metus aliquam. Fames ac turpis egestas maecenas. Auctor urna nunc id
        cursus metus aliquam eleifend. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dolor morbi non
        arcu risus quis varius quam quisque id. Eget velit aliquet sagittis id consectetur. Tortor vitae purus faucibus
        ornare suspendisse sed nisi lacus sed. Convallis aenean et tortor at risus viverra adipiscing at in.</p>
        </div> */}
        </div>
    <div className="bx--row" style={divStyle}>
        <h2 style={divStyle}>Our Team</h2>
    </div>
    
    <div className="bx--row" style={divStyle}>
        

        <div className="bx--col">
        <UserAvatarFilledAlt32 style={divStyle}/>
        <h4 style={divStyle}>Name Aestrofica</h4>
        <h4>Email: Helloworld@bieber.com</h4>
        </div>
        <div className="bx--col">
        <UserAvatarFilledAlt32 style={divStyle}/>
        <h4 style={divStyle}>Name Aestrofica</h4>
        <h4>Email: Helloworld@bieber.com</h4>
        </div>
        <div className="bx--col">
        <UserAvatarFilledAlt32 style={divStyle}/>
        <h4 style={divStyle}>Name Aestrofica</h4>
        <h4>Email: Helloworld@bieber.com</h4>
        </div>
    </div>

    <div className="bx--row" style={{marginTop:"25px"}}>
        <h2>We would to hear back from you</h2>
        
    </div>
    <div className="bx--row" style={divStyle}>
        <Form>
            <TextArea labelText="Feedback" placeholder='Start Writing...'/>
          <Button type="submit" className="some-class"  style={divStyle}>
            Send
          </Button>
        </Form>
    </div>

 {/* here i'm going to map the results */}
</div>);


// Help.Layout = MainLayout;
export default  Help;

