import React from 'react';
// import Search20 from "@carbon/icons-react/lib/search/20";
// import Search from 'carbon-components-react';
import { Logout32, Upload24, UserProfile24, Settings24, Education } from '@carbon/icons-react';
import { Button, Row, Select, Form, TextInput, SelectItem, TextArea, FileUploader } from "carbon-components-react";
    

const divStyle = {
    margin: '10px 0 20px 0'
  };

//   const args = (args) => require('./stories/drop-container').default(args)

  
const Upload = (args) => {
    // const prefix = usePrefix();

    return (<div className="bx--grid" >
<div className="bx--row"  style={divStyle}>
<Row><h2>Upload Material</h2></Row>
</div>

<div className="bx--row" ><Form fullwidth>

        <TextInput id="course-name" type="name" required labelText="Course name"/>

        <TextInput id="course-code" type="name" required labelText="Course Code"/>

        <Select style={divStyle} id="select-1" defaultValue="placeholder-item" labelText="University" helperText="">
        <SelectItem disabled hidden value="placeholder-item" text="Choose an option" />
          <SelectItem value="option-1" text="Option 1" />
          <SelectItem value="option-2" text="Option 2" />
          <SelectItem value="option-3" text="Option 3" />
          <SelectItem value="option-4" text="Option 4" />
      </Select>

      <TextArea labelText="Course Description" placeholder='Start Writing...'/>

      <FileUploader style={divStyle} accept={['.jpg','.png', '.pdf']} buttonKind="primary" buttonLabel="Add files" filenameStatus="edit"
          iconDescription="Clear file" labelDescription="only .jpg files at 500mb or less" labelTitle="Upload" />

      <Button type="submit" className="some-class"  style={{marginTop: "15px"}}>
        Submit
      </Button>

    </Form></div>

{/* here i'm going to map the results */}
</div>)}
// Settings.Layout = DefaultLayout;
export default Upload;