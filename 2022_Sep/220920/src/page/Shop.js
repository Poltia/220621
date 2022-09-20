import React from "react";
import { Header, Body } from "../components";

const Shop = () => {
  return (
    <div>
      <Header title="shop_page" />
      <Body path="/detail/1/10/shirt" name="1" />
      <Body path="/detail/2/10/pants" name="2" />
      <Body path="/detail/3/10/gloves" name="3" />
      <Body path="/detail/4/10/cap" name="4" />
    </div>
  );
};

export default Shop;
