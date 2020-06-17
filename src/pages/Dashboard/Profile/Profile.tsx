import * as React from "react";

import { Avatar } from "antd";

import "./style.css";

export default function Profile() {
  return (
    <div className="container-profile">
      <div>
        <Avatar size={64} icon="user" />
      </div>
      <div>
        <h2> Matheus Paice  </h2>
        <span> Online </span>
      </div>
    </div>
  );
}
