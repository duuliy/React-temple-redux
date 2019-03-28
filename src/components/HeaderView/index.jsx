import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import {Layout, Icon} from 'antd';
import { withRouter } from "react-router-dom";
import './style.less';
const { Header } = Layout;

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

    render() {
        const {userName}=this.state;
        const { collapsed, changeCollapsed } = this.props;
        const sideWidth = collapsed ? 80 : 200;
        return (
            <Header className={`HeaderView`} style={ {width:`calc(100% - ${sideWidth}px)`} }>
                <Icon
                    className="HeaderView-item"
                    type={ collapsed ? 'menu-unfold' : 'menu-fold' }
                    onClick={ changeCollapsed }
                />
                <div className={`HeaderView-right`} onClick={this.jumprouter}>
                  {userName}
                </div>
            </Header>
        );
    }
}

export default HeaderView;