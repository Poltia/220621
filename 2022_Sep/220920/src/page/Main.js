import React from "react";
import { Header, Body } from "../components";

const Main = () => {
  return (
    <div>
      <Header title="main_page" />
      <Body path="login" name="login_page" />
    </div>
  );
};

export default Main;
