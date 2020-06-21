import * as React from "react";

import { Row, Col } from "antd";

// components
import Menu from "../../components/Menu";

import Profile from "./Profile/Profile";

import "./style.css";

const Dashboard: React.FC = ({ children }) => {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
        <div className="menu">
          <Profile />
          <Menu />
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={18} xl={18} xxl={18}>
        {children}
      </Col>
    </Row>
  );
};

export default Dashboard;
