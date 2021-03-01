import React from 'react'
import {Menu,Switch} from 'antd';
import "./Navbar.css"
import {CaretDownOutlined,
    DollarCircleOutlined,MobileOutlined,
    HomeOutlined,AppstoreOutlined,GlobalOutlined,
    VideoCameraOutlined,PlayCircleOutlined,SettingOutlined,PlusOutlined} from '@ant-design/icons';
      import {
          Link
} from "react-router-dom";
function Navbar() {
    const {SubMenu}=Menu
    return (
        <div>
            <div>
                <h1 className="Logo">News Portal</h1>
            </div>
        
        <Menu mode="horizontal">
                  
                    
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                     <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="business" icon={<DollarCircleOutlined />}>
                    Business
                    </Menu.Item>
                    <Menu.Item key="Video" icon={<VideoCameraOutlined />}>
                    Video
                    </Menu.Item>
                    <Menu.Item key="World" icon={<GlobalOutlined />}>
                    World
                    </Menu.Item>
                    <Menu.Item key="Asia" icon={<AppstoreOutlined />}>
                    Asia
                    </Menu.Item>
                    <Menu.Item key="Tech" icon={<MobileOutlined />}>
                    Tech
                    </Menu.Item>
                    <Menu.Item key="EntertaintmentArts" icon={<PlayCircleOutlined />}>
                    Entertaintment & Arts
                    </Menu.Item>
                    <Menu.Item key="science" icon={<AppstoreOutlined />}>
                    Science
                    </Menu.Item>
                    <Menu.Item key="in picture" icon={<AppstoreOutlined />}>
                        In pictures
                    </Menu.Item>
                    
                    <SubMenu key="SubMenu" icon={<CaretDownOutlined />} title="More">
                    <Menu.ItemGroup title="Entertaintment media">
                        <Menu.Item key="setting:1">Stories</Menu.Item>
                        <Menu.Item key="setting:2">Entertaintment & Arts</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="World News">
                        <Menu.Item key="setting:3">World News</Menu.Item>
                        
                    </Menu.ItemGroup>
                    </SubMenu>
                    
                    <SubMenu key="Setting" icon={<SettingOutlined />} title="Settings">
                    <Menu.Item key="dark"><Switch checkedChildren="Light" unCheckedChildren="Dark" >Enable Dark Mode</Switch></Menu.Item>
                    </SubMenu>
                     
                     <Menu.Item key="AddNews" icon={<PlusOutlined />}>
                        <Link to="/addNews">Add News</Link> 
                    </Menu.Item>
                    
            </Menu>
        </div>
    )
}

export default Navbar
