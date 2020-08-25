import React from "react";
import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "./BoxChat.scss";

function BoxChat() {
    return (
        <div className="boxchat">
            <div className="boxchat__header">
                <span className="boxchat__header-user">Ngoc Thinh</span>
                <div className="boxchat__header-call">Video Call</div>
            </div>
            <div className="boxchat__main">
                <div className="boxchat__main-message other-message">
                    <span>Name</span>
                    <p>Hi, how are you</p>
                    <span>6 minutes ago</span>
                </div>
                <div className="boxchat__main-message user-message">
                    <p>Hi, how are you</p>
                    <span>6 minutes ago</span>
                </div>
                <div className="boxchat__main-message other-message">
                    <span>Name</span>
                    <p>Hi, how are you</p>
                    <span>6 minutes ago</span>
                </div>
                <div className="boxchat__main-message other-message">
                    <span>Name</span>
                    <p>Hi, how are you</p>
                    <span>6 minutes ago</span>
                </div>
                <div className="boxchat__main-message user-message">
                    <p>Hi, how are you</p>
                    <span>6 minutes ago</span>
                </div>
                <div className="boxchat__main-message other-message">
                    <span>Name</span>
                    <p>Hi, how are you</p>
                    <span>6 minutes ago</span>
                </div>
                <div className="boxchat__main-message other-message">
                    <span>Name</span>
                    <p>Hi, how are you</p>
                    <span>6 minutes ago</span>
                </div>
                <div className="boxchat__main-message user-message">
                    <p>Hi, how are you</p>
                    <span>6 minutes ago</span>
                </div>
                <div className="boxchat__main-message other-message">
                    <span>Name</span>
                    <p>Hi, how are you</p>
                    <span>6 minutes ago</span>
                </div>
                <div className="boxchat__main-message other-message">
                    <span>Name</span>
                    <p>Hi, how are you</p>
                    <span>6 minutes ago</span>
                </div>
                <div className="boxchat__main-message user-message">
                    <p>Hi, how are you</p>
                    <span>6 minutes ago</span>
                </div>
                <div className="boxchat__main-message other-message">
                    <span>Name</span>
                    <p>Hi, how are you</p>
                    <span>6 minutes ago</span>
                </div>
            </div>
            <form className="boxchat__input">
                <Input type="text" placeholder="Enter message... " />
                <Button type="submit" className="button-send">
                    <SendOutlined />
                </Button>
            </form>
        </div>
    );
}

export default BoxChat;
