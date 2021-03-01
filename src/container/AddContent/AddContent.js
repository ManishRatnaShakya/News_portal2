import React from 'react'
import './AddContent.css';
import {Form,
  Input,
  Button,
  Radio,
  Select,
  Upload,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,} from 'antd';
 import{ PlusOutlined} from '@ant-design/icons';

function AddContent() {
    return (
        <div className="addContent">
            <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
       
      >
       
        <Form.Item label="Title">
          <Input />
        </Form.Item>
        <Form.Item label="Scopes">
          <Select>
            <Select.Option value="Political">Political</Select.Option>
            <Select.Option value="Economics">Economics</Select.Option>
            <Select.Option value="Entertaintment">Entertaintment</Select.Option>
            <Select.Option value="Tech">Tech</Select.Option>
            <Select.Option value="Science">Science</Select.Option>
            <Select.Option value="Business">Business</Select.Option>
            <Select.Option value="In pictures">In pictures</Select.Option>
            <Select.Option value="Asia">Asia</Select.Option>
                      </Select>
        </Form.Item>
        <Form.Item label="Upload Image">
             <Upload
        name="avatar"
        beforeUpload={false}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={true}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        
       
      >
        <PlusOutlined/>
      </Upload>
        </Form.Item>
        
        <Form.Item label="Date Time">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea placeholder="Please describe news in detail..."  style={{ width: '100%',height: '300px'}} />
        </Form.Item>
        
        <Form.Item label="">
          <Button  style={{ marginLeft: '30%'}}>Upload News</Button>
        </Form.Item>
      </Form>
        </div>
    )
}

export default AddContent
