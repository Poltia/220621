import React from "react";
import { Header, Body } from "../components";

const Main = ({ isLogin }) => {
   return (
      <div>
         <Header title="main_page" />
         <Body path="login" name="login_page" isLogin={isLogin} />
      </div>
   );
};

export default Main;
