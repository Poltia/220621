import React from "react";
import { Header, Body } from "../components";

const Login = ({ login, isLogin }) => {
   const setLogin = () => {
      login(true);
   };
   return (
      <div>
         <Header title="login_page" />
         <Body path="/shop" name="shop_page" isLogin={isLogin} />
         <Body path="/mypage" name="my_page" isLogin={isLogin} />
         <button onClick={setLogin}>Login</button>
      </div>
   );
};

export default Login;
