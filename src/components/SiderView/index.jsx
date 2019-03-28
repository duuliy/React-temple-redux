import React, { PureComponent } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { routes } from "@src/routers/routes";
import config from '@src/utils/config.js';
import "./style.less";
const { SubMenu } = Menu;
const { Sider } = Layout;

class SiderView extends PureComponent {
  state = {
    menuList: [],
    selectKey: [], //打开的tree
    openKey: [] //打开的tree的key
  };

  //get api data
  getApiData() {
    const data = [
      { MenuId: "99999999", Name: "系统管理", ParentId: "99999999" },

      { MenuId: "10000000", Name: "基础数据", ParentId: "99999999" },
      { MenuId: "10100000", Name: "组织机构", ParentId: "10000000" },
      { MenuId: "10200000", Name: "用户信息", ParentId: "10000000" },
      { MenuId: "10300000", Name: "权限管理", ParentId: "10000000" },
      { MenuId: "10400000", Name: "加密狗管理", ParentId: "10000000" },
      { MenuId: "10500000", Name: "充值中心", ParentId: "10000000" },

      { MenuId: "20000000", Name: "统计报表", ParentId: "99999999" },
      { MenuId: "20100000", Name: "用户翻译详情统计", ParentId: "20000000" },
      { MenuId: "20200000", Name: "剩余字数", ParentId: "20000000" },
      { MenuId: "20300000", Name: "公司翻译统计", ParentId: "20000000" },
      { MenuId: "20400000", Name: "用户翻译统计", ParentId: "20000000" }
    ];
    const cloneData = this.mergeHandle(data);
    const tree = this.createTree(cloneData, null);
    this.setState({
      menuList: tree,
      selectKey: this.getSelectKey(tree, cloneData),
      openKey: this.getOpenKey(tree)
    });
  }

  //data merge routes transform new data
  mergeHandle(arr) {
    let result = JSON.parse(JSON.stringify(arr));
    const aIcon = ["project", "profile"];
    let index = 0;
    result.forEach(item => {
      item.MenuId === "99999999" && (item.ParentId = null);
      item.ParentId === "99999999" && (item.icon = aIcon[index++]);
      routes[0].routes.forEach(item1 => item1.id === item.MenuId && (item.path  = item1.path))
    });
    // console.log(result)
    return result;
  }

  // data transform tree
  createTree(arr, parentId) {
    let data = JSON.parse(JSON.stringify(arr));
    let result = [];
    data.forEach(item => {
      if (item.ParentId === parentId) {
        let parent = item;
        let temp = this.createTree(data, parent.MenuId);
        if (temp.length) {
          parent.children = temp;
        }
        result.push(parent);
      }
    });
    return result;
  }

  // has menu length
  hasMenuLength(arr) {
    return !!arr.length;
  }

  // create menu component
  createMenu(menuList) {
    const { selectKey, openKey } = this.state;
    let hasLen = this.hasMenuLength(menuList);
    if (!hasLen) return <p>暂无权限</p>;
    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={selectKey}
        defaultOpenKeys={openKey}
      >
        {menuList[0].children.map(item => (
          <SubMenu
            key={item.MenuId}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.Name}</span>
              </span>
            }
          >
            {item.children.map(item => (
              <Menu.Item key={item.MenuId}>
                <Link to={item.path}>{item.Name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    );
  }

  //get menu openKey
  getOpenKey(menuList) {
    let hasLen = this.hasMenuLength(menuList);
    return hasLen ? menuList[0].children.map(item => item.MenuId) : [];
  }

  //get select key
  getSelectKey(menuList, cloneData) {
    let hasLen = this.hasMenuLength(menuList);
    if (!hasLen) return [];
    return cloneData
      .filter(item => item.path === this.props.location.pathname)
      .map(item => item.MenuId);
  }

  render() {
    const { collapsed } = this.props;
    const { menuList } = this.state;
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={`Sider`}
      >
        <div className={"logo"}>
          <a href="/">
            <img alt="logo" src={config.logoPath} />
            {collapsed || <h1>{config.siteName}</h1>}
          </a>
        </div>
        {this.createMenu(menuList)}
      </Sider>
    );
  }

  componentDidMount() {
    this.getApiData();
  }
}

export default SiderView;
