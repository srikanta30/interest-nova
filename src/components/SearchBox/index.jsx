import React, {useState} from 'react';
import {Input, Button} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './searchbox.module.css';

const SearchBox = () => {

const [value, setValue] = useState("");

return (
    <div className={styles.search_input}>
    <Input placeholder="Search for a broad interest or category..."/>
    <Button type="primary" icon={<SearchOutlined />} className={styles.search_button}>
      Search
    </Button>
    </div>
)
};

export default SearchBox;