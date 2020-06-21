import * as React from "react";

import { Menu } from "antd";
import { useHistory } from "react-router-dom";

import { FiHome, FiAirplay, FiSettings, FiInfo } from 'react-icons/fi'

// import history from "../../utils/history";

import "./style.css";

const items = [
  { name: "Home", path: "/", icon: <FiHome /> },
  { name: "Panel", path: "/panel", icon: <FiAirplay /> },
  { name: "Suport", path: "/suport", icon: <FiInfo /> },
  { name: "Config", path: "/config", icon: <FiSettings /> },
];

export default function MenuBar() {
  const history = useHistory();

  return (
    <div className="content-menu">
      <Menu
        style={{ border: "none" }}
        defaultSelectedKeys={["0"]}
        mode="inline"
        theme="light"
      >
        {items.map((item, index) => (
          <Menu.Item key={index} onClick={() => history.push(item.path)}>
            {/* <Icon type="mail" /> */}
            {item.icon} {item.name}
          </Menu.Item>
        ))}
      </Menu>
      <footer>
        Power By &nbsp;<p style={{ color: "#1890ff" }}> Matheus Paice </p>{" "}
      </footer>
    </div>
  );
}
