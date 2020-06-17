import * as React from "react";

import { Row, Col } from "antd";

// components
import Menu from "../../components/Menu";

import Profile from "./Profile/Profile";

import "./style.css";

const Dashboard: React.FC = ({ children }) => {
  return (
    <Row>
      <Col span={5}>
        <div className="menu">
          <Profile />
          <Menu />
        </div>
      </Col>
      <Col span={19}>
        {children}
      </Col>
    </Row>
  );
};

export default Dashboard;
