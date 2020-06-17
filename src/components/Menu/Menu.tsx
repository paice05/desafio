import * as React from "react";

import { Menu } from "antd";

import history from "../../utils/history";

import "./style.css";

const items = [
  { name: "Home", path: "/" },
  { name: "Users", path: "/users" },
  { name: "Suport", path: "/suport" },
  { name: "Config", path: "/config" },
];

export default function MenuBar() {
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
            {item.name}
          </Menu.Item>
        ))}
      </Menu>
      <footer>
        Power By &nbsp;<p style={{ color: "#1890ff" }}> Matheus Paice </p>{" "}
      </footer>
    </div>
  );
}
