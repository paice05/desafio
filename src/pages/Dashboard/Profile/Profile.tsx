import * as React from "react";

import { Avatar } from "antd";

import "./style.css";

export default function Profile() {
  return (
    <section className="container-profile">
      <Avatar size={64} icon="user" />
      <div>
        <h2> Matheus Paice </h2>
        <span> Online </span>
      </div>
    </section>
  );
}
