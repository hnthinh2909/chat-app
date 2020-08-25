import React from "react";
import { Layout } from "antd";
import { Avatar } from "antd";
import "./HomePage.scss";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
        </Menu.Item>
    </Menu>
);

function HeaderPage() {
    return (
        <Header className="header">
            <h2 className="header__title">Chat</h2>

            <Dropdown overlay={menu} trigger={["click"]}>
                <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                >
                    <Avatar size={40}>USER</Avatar>
                </a>
            </Dropdown>
        </Header>
    );
}

export default HeaderPage;
