import { Layout, Menu} from 'antd';
import styles from './layout.module.css';
import SearchBox from '../SearchBox';

const { Header, Content, Footer } = Layout;

const LayoutComponent = () => (
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
        <SearchBox/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Interest Nova 🧭 ©{new Date().getFullYear()} Created by <a href="https://in.linkedin.com/in/srikanta30">Srikanta Banerjee</a></Footer>
  </Layout>
);

export default LayoutComponent;