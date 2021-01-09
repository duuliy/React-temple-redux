import React, { PureComponent } from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {routes} from '@src/routers/routes';
import { connect } from "react-redux";

import { LanguageContext } from '@src/context/index'


/*   语言包相关   */
import { LocaleProvider } from "antd";
import zh_antd from 'antd/lib/locale-provider/zh_CN';
// import ko_antd from 'antd/lib/locale-provider/ko';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/ko';

import { IntlProvider,addLocaleData } from 'react-intl';
import zh_intl from '@assets/language/zh.json'
// import ko_intl from '@assets/language/ko.json'
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import ko from 'react-intl/locale-data/ko';
addLocaleData([...en, ...zh,...ko]);  // 引入多语言环境的数据
// antd 默认是英文，初始化为中文

const { Provider  } = LanguageContext;


@connect(
  ({ organization }) => ({
      intlLocale: organization.intlLocale
  })
)
class App extends PureComponent {
  state = {
    antdLocale: zh_antd,
    // intlLocale:zh_intl,
    intlText:'zh'
  };
  render() {
    const { antdLocale,intlText } = this.state;
    const {intlLocale}=this.props;
    console.log(intlLocale)
    console.log(666)
    // moment.locale(intlText);
    // const changeLocale = e => {
    //     this.setState({
    //         antdLocale: e.locale_antd,
    //         intlLocale: e.locale_intl,
    //         intlText: e.value,
    //     });
    //     moment.locale(e.value);
    // };

    return (
      <Router >
        <div className="App">
          <Switch>
          <Route exact path='/' render={()=> <Redirect to='/home'/>} />
            {
               routes.map((Item, index) => {
                 return(
                   <Route
                      key={index}
                      path={Item.path}
                      exact={Item.exact}
                      render={ props => {
                      return (    
                        <LocaleProvider locale={antdLocale}>
                          <IntlProvider locale={intlText} messages={intlLocale}>
                            {/* <Provider value={ {changeLocale} }> */}
                              <Item.component
                                {...props}
                                routes={Item.routes}
                               />
                             {/* </Provider> */}
                          </IntlProvider>
                        </LocaleProvider>
                           
                          )}}
                    ></Route>)
                })
              }
          </Switch>
        </div>
    </Router>
    );
  }
}

export default App;
