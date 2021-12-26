import React from "react";
import { Layout, Menu } from "antd";
import {
  MonitorOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  ApartmentOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";
import "./DefaultLayout.style.css";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default class DefaultLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Link to="/">
            <div className="logo">
              <MonitorOutlined />
              {!this.state.collapsed && <p>Product Sentiment Analyser</p>}
            </div>
          </Link>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">Quick Insights</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ApartmentOutlined />}>
              <Link to="/train">Train Model </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ExperimentOutlined />}>
              <Link to="/test">Test Model</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="layout-header site-layout-background"
            style={{ padding: 0 }}
          >
            <span className="menu-toggle">
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </span>
          </Header>
          <Content className="site-layout-background layout-content">
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
