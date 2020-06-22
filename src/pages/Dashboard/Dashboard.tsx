import React, { useEffect } from "react";

import { Row, Col } from "antd";
import { useDispatch } from "react-redux";

// ducks
import actionsAuth from "../../store/ducks/auth/actions";
// components
import Menu from "../../components/Menu";
import Profile from "./Profile/Profile";
// assets
import "./style.css";

const Dashboard: React.FC = ({ children }) => {
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(actionsAuth.load());
  }, [dispacth]);

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
