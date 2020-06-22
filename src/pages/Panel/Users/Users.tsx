import React from "react";

import { Table } from "antd";
import { useSelector } from "react-redux";

// store
import { ApplicationState } from "../../../store";
// ducks
import { User } from "../../../store/ducks/users/types";
import { getElements } from "../../../store/ducks/resource/selectors";
// components
import Avatar from "../../../components/Avatar";
// assets
import "./style.css";

interface Props {}

const columns = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    width: '20px'
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
];

const Users: React.FC<Props> = (props) => {
  const data: User[] = useSelector((state: ApplicationState) =>
    getElements(state.users)
  );

  return (
    <div className="container-users">
      <Table
        columns={columns}
        dataSource={data.map((item) => ({
          ...item,
          avatar: <Avatar path={item.photo_url} />,
          key: item.id,
        }))}
      />
    </div>
  );
};

export default Users;
