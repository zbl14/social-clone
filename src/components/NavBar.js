import React from "react";
import NavBarButton from "./NavBarButton";
import NavBarSearch from "./NavBarSearch";
import NavBarTweet from "./NavBarTweet";

const NavBar = () => {
  return(
    <React.Fragment>
      <NavBarButton />
      <NavBarSearch />
      <NavBarTweet />
    </React.Fragment>
  )
};

export default NavBar;