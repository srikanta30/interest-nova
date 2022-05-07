import { Layout, Menu} from 'antd';
import styles from './layout.module.css';
import SearchBox from '../SearchBox';
import Results from '../Results';
import React, {useState} from 'react';

const { Header, Content, Footer } = Layout;

const LayoutComponent = () => {

  const [dataSource, setDataSource] = useState([]);

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
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <SearchBox handleClick={handleSearch}/>
        <Results tableData={dataSource}/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Interest Nova 🧭 ©{new Date().getFullYear()} Created by <a href="https://in.linkedin.com/in/srikanta30">Srikanta Banerjee</a></Footer>
  </Layout>
  </div>
)};

export default LayoutComponent;