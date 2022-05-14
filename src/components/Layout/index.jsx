import { Layout} from 'antd';
import styles from './layout.module.css';
import SearchBox from '../SearchBox';
import Results from '../Results';
import React, {useState, useEffect} from 'react';

const { Header, Content, Footer } = Layout;

const LayoutComponent = () => {

  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
        setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [dataSource]);

  const handleSearch = async (query, key) => {
    const searchQuery = query.trim().split(" ").join("+");
    const res = await fetch(`https://graph.facebook.com/search?type=adinterest&q=${searchQuery}&limit=10000&locale=en_US&access_token=${key}`);
    const {data} = await res.json();
    let newDataSource = data.map((item) => {
      return {
        interest: item.name,
        audience_size: item.audience_size_upper_bound,
        topic: item.topic,
        search: item.name
      }
    });
    setDataSource(newDataSource);
  }

return (
  <div>
  <Layout className="layout">
    <Header>
      <h1 className={styles.menu_header}>Interest Nova 🧭</h1>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <SearchBox handleClick={handleSearch}/>
        <Results tableData={dataSource} loading={loading}/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Interest Nova 🧭 ©{new Date().getFullYear()} Created by <a href="https://in.linkedin.com/in/srikanta30" target="_blank" rel="noreferrer">Srikanta Banerjee</a> | <a href="https://docs.google.com/document/d/e/2PACX-1vTXEkU6pKM__pmvXBzbXoPU9zBknBLf3koqIeE1A7PKFbh9M2qav-G3uDuxBoNfm8bUQaksXcbGKbmc/pub" target="_blank" rel="noreferrer">Privacy Policy</a> </Footer>
  </Layout>
  </div>
)};

export default LayoutComponent;