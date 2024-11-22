import './App.css';
import { Button, Layout, theme, Dropdown, Avatar, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import Logo from './components/Logoc/Logo';
import MenuList from './components/MenuList/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';
import { useState } from 'react';
import AppFooter from './components/Footer/AppFooter';

const { Header, Sider } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kullanıcı giriş durumu

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Giriş yapılmış durum
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Çıkış yapılmış durum
  };

  const loggedInMenu = (
    <Menu>
      <Menu.Item key="1">Profilim</Menu.Item>
      <Menu.Item key="2">Ayarlar</Menu.Item>
      <Menu.Item key="3" onClick={handleLogout}>
        Çıkış Yap
      </Menu.Item>
    </Menu>
  );

  const guestMenu = (
    <Menu>
      <Menu.Item key="1" onClick={handleLogin}>
        Giriş Yap
      </Menu.Item>
      <Menu.Item key="2" onClick={() => alert("Kayıt sayfasına yönlendiriliyor")}>
        Kayıt Ol
      </Menu.Item>
    </Menu>
  );

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? 'dark' : 'light'}
        className="sidebar"
      >
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            className="toggle"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
          <div>
            {isLoggedIn ? (
              <Dropdown overlay={loggedInMenu} placement="bottomRight">
                <Avatar
                  style={{ cursor: 'pointer' }}
                  src="https://i.pravatar.cc/300"
                  icon={<UserOutlined />}
                />
              </Dropdown>
            ) : (
              <Dropdown overlay={guestMenu} placement="bottomRight">
                <Button type="primary" shape="round">
                  Giriş Yap
                </Button>
              </Dropdown>
            )}
          </div>
        </Header>
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default App;
