import React, { useEffect } from "react";

import { Tabs } from "antd";
import { useDispatch } from "react-redux";

import actionsUsers from "../../store/ducks/users/actions";

import "./style.css";

import Users from "./Users";
import Ranges from "./Ranges";
import Search from "./Search";

const Panel: React.FC = () => {
  const dispatch = useDispatch();
  const { TabPane } = Tabs;

  useEffect(() => {
    dispatch(actionsUsers.load());
  }, [dispatch]);

  const handleCallback = () => {
    console.log("callback");
  };

  return (
    <Tabs
      className="container-panel"
      defaultActiveKey="1"
      onChange={handleCallback}
    >
      <TabPane tab="Graphics" key="1">
        <Ranges />
      </TabPane>
      <TabPane tab="Users" key="2">
        <Users />
      </TabPane>
      <TabPane tab="Search" key="3">
        <Search />
      </TabPane>
    </Tabs>
  );
};

export default Panel;
