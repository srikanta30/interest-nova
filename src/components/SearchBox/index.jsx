import React, {useState} from 'react';
import {Input, Button, Form} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './searchbox.module.css';
import useLocalStorage from '../../hooks/useLocal';

const SearchBox = ({handleClick}) => {

const [form] = Form.useForm();

const [query, setQuery] = useState("");
const [key, setKey] = useLocalStorage("key", "");

const onFinish = () =>{
handleClick(query, key);
};

return (
    
    <Form layout="vertical" onFinish={onFinish} form={form}>
      <div className={styles.search_input}>
     <Form.Item label="Search Term" style={{width:"70%"}} rules={[{required: true, message: "Please enter a search term."}]}>
    <Input placeholder="Search for a broad interest or category..." value={query} onChange={(e) => setQuery(e.target.value)}/>
    </Form.Item> 
    <Form.Item label="Access Token" style={{width:"25%"}} rules={[{required: true, message: "Please enter a valid access token."}]}>
    <Input.Password placeholder="Enter access token" value={key} onChange={(e) => setKey(e.target.value)}/>
    </Form.Item>
    <Form.Item label=" ">
    <Button type="primary" icon={<SearchOutlined />} className={styles.search_button} htmlType="submit">
      Search
    </Button>
    </Form.Item>
    </div>
    </Form>
    
)
};

export default SearchBox;