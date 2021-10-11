import React from "react";
import { connect } from 'react-redux'
// import  * as actionCreators  from './store/actionCreators'
import { actionCreators } from "./store";
import { CSSTransition} from "react-transition-group";
import "./Header.scss";
import logo from "../../statics/logo.png";
import redPacket from "../../statics/redPacket.png";

const Header = (props) => {
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
}


/*  class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  inputFocus = () => {
    this.setState({
      focused: true,
    });
  };
  inputBlur = () => {
    this.setState({
      focused: false
    })
  }
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
                <CSSTransition in={this.props.focused} timeout={1000} classNames='slide' >
                  <li className="search ">
                    <input
                      type="text"
                      onFocus={this.props.inputFocus}
                      onBlur={this.props.inputBlur}
                    />
                    <i className="iconfont">&#xe601;</i>
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
} */

const mapStateToProps = (state) => {
  
  return {
    focused: state.header.focused  //由于将store放到了组件自身目录下的reducer,所以需要加个header
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    inputFocus() {
      dispatch(actionCreators.searchFoucus())
    },
    inputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)