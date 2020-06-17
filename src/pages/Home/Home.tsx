import * as React from "react";

import { Button, Card } from "antd";

import { FiMoreVertical, FiThumbsUp, FiStar } from "react-icons/fi";

import Logo from "../../assets/img/teaching.svg";

import "./style.css";

const Home: React.FC = ({ children }) => {
  const { Meta } = Card;

  return (
    <div className="content-home">
      <section>
        <div>
          <div>
            <h1 style={{ fontSize: "42px" }}>Wake up brother</h1>
            <p style={{ fontSize: "20px" }}>
              Welcome to the Paice platform. Would you like practical and
              simplified content? Here is the ideal place to advance your
              studies with a guarantee.
            </p>
          </div>
          <Button> Start </Button>
        </div>
        <img src={Logo} width="500" alt="" />
      </section>
      <section>
        {[1, 2, 3, 4].map((item) => (
          <Card
            key={item}
            style={{ width: '100%', margin: '0 7px' }}            
            actions={[<FiThumbsUp />, <FiStar />, <FiMoreVertical />]}
          >
            <Meta
              
              title="Card title"
              description="This is the description"
            />
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Home;
