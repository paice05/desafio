import * as React from "react";

import { useSelector } from "react-redux";

// component
import Avatar from "../../../components/Avatar";
// store
import { ApplicationState } from "../../../store";
// assets
import "./style.css";

export default function Profile() {
  const userAuthenticate = useSelector(
    (state: ApplicationState) => state.auth.user
  );

  return (
    <section className="container-profile">
      <Avatar path={userAuthenticate.photo_url} />
      <div>
        <h2> {userAuthenticate.name} </h2>
        <span> Online </span>
      </div>
    </section>
  );
}
