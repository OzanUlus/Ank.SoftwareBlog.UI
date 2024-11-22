import React from 'react'
import './menuList.css'
import { Menu } from 'antd'
import {HomeOutlined,EditOutlined,UserDeleteOutlined,MessageOutlined,BarsOutlined,SettingOutlined,LoginOutlined,FormOutlined} from '@ant-design/icons'

export const MenuList = (darkTheme) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light' } mode="inline" className='menu-bar'>
       <Menu.Item key="home" icon={<HomeOutlined />}>
       Home
       </Menu.Item>
       <Menu.Item key="article" icon={<EditOutlined /> }>
       Makaleler
       </Menu.Item>
       <Menu.SubMenu key='subject' icon={<BarsOutlined />} title="Konular">
        <Menu.Item key="subject-1">C#</Menu.Item>
        <Menu.Item key="subject-2">OOP</Menu.Item>
        <Menu.Item key="subject-3">EFCORE</Menu.Item>
        <Menu.SubMenu key="subject-4" title="ASP.NET CORE">
        <Menu.Item key="subsubject-1">MVC</Menu.Item>
        <Menu.Item key="subsubject-2">WEB API</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="subject-5">REACT</Menu.Item>
       </Menu.SubMenu>
       <Menu.SubMenu key="user" icon={<UserDeleteOutlined />}title="Kullanıcı İşlemleri">
       <Menu.Item key="login" icon={<LoginOutlined />}>Giriş Yap</Menu.Item>
       <Menu.Item key="register" icon={<FormOutlined />}>Kayıt Ol</Menu.Item>
       </Menu.SubMenu>
       <Menu.Item key="contact" icon={<MessageOutlined />}>
       İletişim
       </Menu.Item>
       <Menu.Item key="setting" icon={<SettingOutlined />}>
       Ayarlar
       </Menu.Item>
       
    </Menu>
  )
}
export default MenuList
