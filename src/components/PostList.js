import React from "react";
import PostListUserStatus from "./PostListUserStatus";
import PostListFriendStatus from "./PostListFriendStatus";


const PostList = () => {
  return(
    <React.Fragment>
      <PostListUserStatus />
      <PostListFriendStatus />
    </React.Fragment>
  )
};

export default PostList;