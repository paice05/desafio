import React from "react";

import { Table } from "antd";

import "./style.css";

interface Props {}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: any = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const Users: React.FC<Props> = (props) => {
  return (
    <div className="container-users">
      <section>Welcome Panel</section>
      <section>
        <Table
          columns={columns}
          dataSource={data}
          style={{ overflowY: "auto", height: 670 }}
        />
        ,
      </section>
    </div>
  );
};

export default Users;
