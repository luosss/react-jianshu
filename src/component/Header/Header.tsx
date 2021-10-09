import React, { Component } from "react";
import "./Header.scss";
import logo from "../../statics/logo.png";
import redPacket from "../../statics/redPacket.png";

export default class Header extends Component {
  render() {
    return (
      <div className="box">
        <div className="headerwrapp">
          <div className="header">
            <a href="/">
              <img src={logo} alt="" />
            </a>
            <div className="center">
              <ul>
                <li>
                  <a href="/">
                    <i className="iconfont">&#xe62e;</i>
                    <span>首页</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="iconfont">&#xe668;</i>
                    <span>下载App</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="iconfont">&#xe6e0;</i>
                    <span>IT技术</span>
                  </a>
                </li>
                <li className="search">
                  <input type="text" />
                  <i className="iconfont">&#xe601;</i>
                </li>
                <li>
                  <div className="redpacketdiv">
                    <img className="redpacket" src={redPacket} alt="" />
                    <a href="/">抽奖</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right">
              <div>
                <i className="iconfont">&#xe636;</i>
              </div>
              <div>登录</div>
              <div>注册</div>
              <div className="edit">
                <i className="iconfont">&#xe600;</i>
                <span>写文章</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
