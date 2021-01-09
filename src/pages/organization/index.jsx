import React, {PureComponent} from 'react';
import './style.less'
import { Button } from 'antd';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";  //取方法
import { addtest,addtest2 } from "../../actions/organization";
import { FormattedMessage,injectIntl } from 'react-intl';


@connect(
  ({ organization }) => ({
    data: organization.data1,
    loading: organization.loading,
    come: organization.come
  }),
  dispatch =>
    bindActionCreators(
      {
        addtest,
        addtest2
      },
      dispatch
    )
)

class organization extends PureComponent {
    state = {
        PrefixCls: 'organization',
    };
    render() {
      console.log(777)
      const {PrefixCls} =this.state;
      const {addtest,addtest2,data: { name },loading,come} =this.props;
      return (
            <div className={PrefixCls}>
              <div className={`${PrefixCls}-cont`}>
                这是organization
                <Button type="primary" onClick={() => {addtest()}}>增加</Button>
                <Button type="primary" onClick={() => {addtest2()}}>改变</Button>
                {(console.log(come),come)}
                {name}
                {loading}
                <br/>
                <FormattedMessage id={`organization`}></FormattedMessage>
              </div>
            </div>
      );
    }
}

export default injectIntl(organization);