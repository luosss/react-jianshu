import React, { Component } from "react";
import { connect } from "react-redux";
// import  * as actionCreators  from './store/actionCreators'
import { actionCreators } from "./store";
import { CSSTransition } from "react-transition-group";
import "./Header.scss";
import logo from "../../statics/logo.png";
import redPacket from "../../statics/redPacket.png";

/* const Header = (props) => {
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
                <CSSTransition in={props.focused} timeout={1000} classNames='slide' >
                  <li className="search ">
                    <input
                      type="text"
                      onFocus={props.inputFocus}
                      onBlur={props.inputBlur}
                    />
                    <i className="iconfont">&#xe601;</i>
                    {getListArea(props.focused)}
                  </li>
                  </CSSTransition>
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
  )
} */

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getListArea = () => {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      searchInfoEnter,
      searchInfoLeave,
      changePage,
    } = this.props;
    const jsList = list.toJS(); //转换为普通js
    const pageList = [];
    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<div key={i}>{jsList[i]}</div>);
      }
    }

    if (focused || mouseIn) {
      return (
        <div
          className="searchInfo"
          onMouseEnter={searchInfoEnter}
          onMouseLeave={searchInfoLeave}
        >
          <div className="searchTop">
            <div className="searchinfoTitle">热门搜索</div>
            <div
              className="searchSwitch"
              onClick={() => {
                changePage(page, totalPage, this.spinIcon);
              }}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont"
              >
                &#xe66d;
              </i>
              <span>换一批</span>
            </div>
          </div>
          <div className="searchContent">{pageList}</div>
        </div>
      );
    } else {
      return null;
    }
  };
  inputFocus = () => {
    this.setState({
      focused: true,
    });
  };
  inputBlur = () => {
    this.setState({
      focused: false,
    });
  };
  render() {
    const { focused, inputFocus, inputBlur, list } = this.props;
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
                <CSSTransition in={focused} timeout={1000} classNames="slide">
                  <li className="search ">
                    <input
                      type="text"
                      onFocus={() => inputFocus(list)}
                      onBlur={inputBlur}
                    />
                    <i className="iconfont">&#xe601;</i>
                    {this.getListArea()}
                  </li>
                </CSSTransition>
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

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')  //由于将store放到了组件自身目录下的reducer,所以需要加个header
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    inputFocus(list) {
      console.log(list);
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFoucus());
    },
    inputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    searchInfoEnter() {
      dispatch(actionCreators.searchInfoMouseEnter());
    },
    searchInfoLeave() {
      dispatch(actionCreators.searchInfoMouseLeave());
    },
    changePage(page, totalPage, spin) {
      let originAangle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAangle) {
        originAangle = parseInt(originAangle, 10);
      } else {
        originAangle = 0;
      }
      spin.style.transform = `rotate(${originAangle + 360}deg)`;
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
