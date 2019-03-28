import React, {PureComponent} from 'react';
import { Layout } from 'antd';
import './style.less';
const { Content } = Layout;

class ContentView extends PureComponent {
    render() {
        return (
            <Content className={`ContentView`} >
                {this.props.children}
            </Content>
        );
    }
}

export default ContentView;