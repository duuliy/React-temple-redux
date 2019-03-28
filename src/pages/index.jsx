import React, {PureComponent,Fragment,Suspense} from 'react';
import { Layout,Spin } from 'antd';
import { Route,Redirect,Switch,withRouter } from "react-router-dom";
import config from '@src/utils/config.js';

import SiderView from '@components/SiderView'
import HeaderView from '@components/HeaderView'
import Footer from '@components/Footer'
import ContentView from '@components/ContentView'
import Breadcrumb from '@components/Breadcrumb'


@withRouter
class home extends PureComponent {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const { collapsed } = this.state;
        const paddingNum = collapsed ? 80 : 200;
        if(this.props.location.pathname === `/home`){
            return(
                <Redirect to={`/home/organization`}></Redirect>
            )
        }
        return (
            <Fragment>
              <Layout style={ {paddingLeft:paddingNum,transition:`all .2s` } }>
                <SiderView collapsed={collapsed} location={this.props.location}></SiderView>
                <Layout>
                  <HeaderView collapsed={collapsed} changeCollapsed={this.toggle}></HeaderView>
                  <Breadcrumb></Breadcrumb>
                  <ContentView>
                    <Suspense fallback={<Spin tip='loading...' />}>
                      <Switch>
                          {this.props.routes.map((item,index) => {
                            return(
                                  <Route
                                    key={index}
                                    path={item.path}
                                    exact={item.exact}
                                    component={item.component}
                                  ></Route>
                                )})}
                      </Switch>
                    </Suspense>
                  </ContentView>
                  <Footer footer={config.copyright} />
                </Layout>
              </Layout>
            </Fragment>
        );
    }
}

export default home;