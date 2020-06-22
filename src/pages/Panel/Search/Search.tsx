import React, { useState } from "react";

import { Collapse, Input } from "antd";
import { useSelector } from "react-redux";

// component
import Avatar from "../../../components/Avatar";
// store
import { ApplicationState } from "../../../store";
// ducks
import { User } from "../../../store/ducks/users/types";
import { getElements } from "../../../store/ducks/resource/selectors";
// assets
import "./style.css";

interface Props {}

const SearchUsers: React.FC<Props> = (props) => {
  const { Search } = Input;
  const { Panel } = Collapse;

  const [usersFiltered, setUserFiltered] = useState<User[]>([]);

  const data: User[] = useSelector((state: ApplicationState) =>
    getElements(state.users)
  );

  const handleSearch = (value: string) => {
    let temp: User[] = [];

    if (value) {
      temp = data.filter((item) => {
        const lc = item.name.toLowerCase();
        const filterData = value.toLowerCase();
        console.log(lc);
        return lc.includes(filterData);
      });

      if (temp.length) {
        setUserFiltered(temp);
      } else {
        setUserFiltered([]);
      }
    } else {
      setUserFiltered([]);
    }
  };

  return (
    <div className="container-search">
      <Search
        placeholder="search for a user"
        onSearch={handleSearch}
        style={{ marginBottom: "14px" }}
      />
      <Collapse bordered={false}>
        {usersFiltered.length &&
          usersFiltered.map((user) => (
            <Panel header={user.name} key={user.id}>
              <Avatar path={user.photo_url} />
              <div>
                "id": {user.id} <br />
                "name": {user.name} <br />
                "email": {user.email} <br />
                "phone": {user.email} <br />
                "amount": {user.amount} <br />
                "photo_url": {user.photo_url} <br />
                "status": {user.status} <br />
              </div>
            </Panel>
          ))}
      </Collapse>
    </div>
  );
};

export default SearchUsers;
