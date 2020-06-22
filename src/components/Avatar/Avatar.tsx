import React from "react";

import { Avatar } from "antd";

interface Props {
  path?: string;
  size?: number;
}

const AvatarDefault: React.FC<Props> = ({ path = "", size = 64 }) => {
  return <Avatar size={size} src={path.replace(/[\\]/g, "")} />;
};

export default AvatarDefault;
