import React from "react";

import { Collapse, Avatar, Input } from "antd";

const { Search } = Input;
const { Panel } = Collapse;

interface Props {}

const SearchUsers: React.FC<Props> = (props) => {
  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        style={{ marginBottom: '14px' }}
      />
      <Collapse bordered={false}>
        <Panel header="Ronaldo Abreu" key="1">
          <Avatar />
          <div>
            "id": "2" <br />
            "name": "Geovane Felix" <br />
            "email": "geovane.felix@meusite.com.br" <br />
            "phone": "(14) 99745-5678" <br />
            "amount": "265.59" <br />
            "photo_url":
            "https:\/\/desafio.eadplataforma.com\/front\/assets\/geovane.jpg"{" "}
            <br />
            "status": "0" <br />
          </div>
        </Panel>
        <Panel header="Ronaldo Abreu" key="2">
          <Avatar />
          <div>
            "id": "2" <br />
            "name": "Geovane Felix" <br />
            "email": "geovane.felix@meusite.com.br" <br />
            "phone": "(14) 99745-5678" <br />
            "amount": "265.59" <br />
            "photo_url":
            "https:\/\/desafio.eadplataforma.com\/front\/assets\/geovane.jpg"{" "}
            <br />
            "status": "0" <br />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default SearchUsers;
