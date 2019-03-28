import React, {Component} from 'react';
import { Breadcrumb } from 'antd';
import './style.less';
class MyBreadcrumb extends Component {
    render() {
        let pathList = window.location.pathname.slice(1).split('/');
        return (
            <Breadcrumb className={`MyBreadcrumb`}>
                {
                    pathList.map((item,index) => {
                        return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                    })
                }
            </Breadcrumb>
        );
    }
}

export default MyBreadcrumb;