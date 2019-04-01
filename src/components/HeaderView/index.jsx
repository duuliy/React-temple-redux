import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import {Layout, Icon,Button} from 'antd';
import { withRouter } from "react-router-dom";
import './style.less';
import moment from 'moment';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";  //取方法
import {langch}  from "../../actions/organization";
/*   语言包相关   */
import zh_intl from "@assets/language/zh.json";
import en_intl from "@assets/language/en.json";
import ko_intl from "@assets/language/ko.json";

import zh_antd from "antd/lib/locale-provider/zh_CN";
import en_antd from "antd/lib/locale-provider/en_GB";
import ko_antd from "antd/lib/locale-provider/ko_KR";

const { Header } = Layout;


@connect(
    ({ organization }) => ({
        intlLocale: organization.intlLocale
    }),
    dispatch =>
      bindActionCreators(
        {
            langch
        },
        dispatch
      )
  )

@withRouter
class HeaderView extends PureComponent {
    state={
        userName:'duuliy'
    }

    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    jumprouter=()=>{//子组件拿路由history
        // console.log(this.context)
        // console.log(this.props)
        this.props.history.push('/home/main/test2')
    }

    changelang=(type)=>{
        console.log(666)
        const {langch}=this.props;
        console.log(langch)
        let value=type==='1'?'zh-cn':'ko'
        let msg=type==='1'?zh_intl:en_intl
        moment.locale(value);
        langch(msg)
        
    }

    render() {
        const {userName}=this.state;
        const { collapsed, changeCollapsed } = this.props;
        const sideWidth = collapsed ? 80 : 200;

        // console.log(changeLocale)
        return (
            <Header className={`HeaderView`} style={ {width:`calc(100% - ${sideWidth}px)`} }>
                <Icon
                    className="HeaderView-item"
                    type={ collapsed ? 'menu-unfold' : 'menu-fold' }
                    onClick={ changeCollapsed }
                />
                <Button onClick={()=>this.changelang('1')}>中文</Button>
                <Button onClick={()=>this.changelang('2')}>英文</Button>
                <div className={`HeaderView-right`} onClick={this.jumprouter}>
                  {userName}
                </div>
                {({ changeLocale }) => {
                    console.log(changeLocale)
                    return(<div>1</div>)
                }}
            </Header>
        );
    }
}

export default HeaderView;