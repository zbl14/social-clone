import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import User from "./User";
import PostList from "./PostList";
import AddFriend from "./AddFriend";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <NavBar />
      <User />
      <PostList />
      <AddFriend />
    </React.Fragment>
  );
}

export default App;
