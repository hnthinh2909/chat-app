import React from "react";
import SignUp from "../SignUp";
import Login from "../Login";
import LeftNavigation from "../LeftNavigation";
import "./HomePage.scss";

import { Layout } from "antd";
import HeaderPage from "../HeaderPage";
import BoxChat from "../BoxChat";

const { Header, Footer, Sider, Content } = Layout;

function HomPage() {
    return (
        <div className="homepage">
            {/* <Login /> */}
            {/* <SignUp /> */}

            <Layout className="homepage__layout">
                <HeaderPage />
                <Layout className="homepage__layout-section">
                    <LeftNavigation />
                    <BoxChat />
                </Layout>
            </Layout>
        </div>
    );
}

export default HomPage;
