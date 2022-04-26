import React from 'react';
import {useState} from 'react'
import { Button, Row, Select, Form, TextInput, SelectItem, TextArea, FileUploader } from "carbon-components-react";
import Layout from '../../components/layout/Layout';

const divStyle = {
    margin: '10px 0 20px 0'
  };

//   const args = (args) => require('./stories/drop-container').default(args)

  
const Upload = (args) => {
  const [title, setTitle] =useState("");
  const [code, setCode] =useState("");
  const [university, setUni] =useState("");
  const [description, setDesc] =useState("");

const  uploadFile = () => {

  }
    // const prefix = usePrefix();

    return (<Layout>
      <div className="bx--grid" >
<div className="bx--row"  style={divStyle}>
<Row><h2>Upload Material</h2></Row>
</div>

<div className="bx--row" ><Form fullwidth>

        <TextInput id="course-name" type="name" required labelText="Course Title" onChange={(e)=> { setTitle(e.target.value)}}/>

        <TextInput id="course-code" type="name" required labelText="Course Code" onChange={(e)=> { setCode(e.target.value)}}/>

        <Select style={divStyle} id="select-1" defaultValue="placeholder-item" labelText="University" helperText="" onChange={(e)=> { setUni(e.target.value)}}>
        <SelectItem disabled hidden value="placeholder-item" text="Choose an option" />
          <SelectItem value="option-1" text="Carleton University" />
          <SelectItem value="option-2" text="UOttawa" />
          <SelectItem value="option-3" text="Algonquin College" />
          <SelectItem value="option-4" text="Other" />
      </Select>

      <TextArea labelText="Course Description" placeholder='Start Writing...' onChange={(e)=> { setDesc(e.target.value)}}/>

      <FileUploader style={divStyle} accept={['.jpg','.png', '.pdf']} buttonKind="primary" buttonLabel="Add files" filenameStatus="edit"
          iconDescription="Clear file" labelDescription=".jpg .pdf files at 500mb or less" labelTitle="Upload" />

      <Button type="submit" className="some-class"  style={{marginTop: "15px"}}>
        Submit
      </Button>

    </Form></div>

{/* here i'm going to map the results */}
</div></Layout>)}
// Settings.Layout = DefaultLayout;
export default Upload;