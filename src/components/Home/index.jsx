import { Layout, Input, message, Card} from 'antd';
import styles from './layout.module.css';
import Results from '../Results';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const { Header, Content, Footer } = Layout;

const LayoutComponent = () => {

  const [query, setQuery] = useState(null);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    

    ((async () => {
      if (query) {

        setLoading(true);

        try {

          const searchQuery = query.trim().split(" ").join("+");

          const res = await axios.get(`https://interest-nova-server.onrender.com/search?q=${searchQuery}`);

          if (res.data.success) {

            let newDataSource = res.data.data.data.map((item) => {
              return {
                key: uuidv4(),
                interest: item.name,
                audience_size: item.audience_size_upper_bound,
                topic: item.topic,
              }
            });

            setDataSource(newDataSource);

          }


        } catch (err) {
          message.error("Sorry, something went wrong!");
        }

        setLoading(false);

      }
    }))();

    
  }, [query]);

  return (
    <div>
      <Layout className="layout">
        <Header>
          <h1 className={styles.menu_header}>Interest Nova 🧭</h1>
        </Header>
        <Card style={{width: "100%"}}>
        <Content>
          <div className="site-layout-content">
            <Input.Search placeholder="Search a broad term or keyword..." onSearch={(e) => setQuery(e)} size="large" style={{ marginTop: "5%" }} allowClear enterButton="Search" />
            <Results tableData={dataSource} loading={loading} />
          </div>
        </Content>
        <div style={{marginTop: "1%", background: 'yellow', padding:".5%"}}><a href="https://www.paypal.me/srikanta30" target="_blank" rel="noreferrer">Found This Useful? Help Me Build More Awesome Tools 🚀</a></div>
        </Card>
        <Footer style={{ textAlign: 'center' }}>Interest Nova 🧭 ©{new Date().getFullYear()} Created by <a href="https://in.linkedin.com/in/srikanta30" target="_blank" rel="noreferrer">Srikanta Banerjee</a> | <a href="https://docs.google.com/document/d/e/2PACX-1vTXEkU6pKM__pmvXBzbXoPU9zBknBLf3koqIeE1A7PKFbh9M2qav-G3uDuxBoNfm8bUQaksXcbGKbmc/pub" target="_blank" rel="noreferrer">Privacy Policy</a> </Footer>
      </Layout>
    </div>
  )
};

export default LayoutComponent;
