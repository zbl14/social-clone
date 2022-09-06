import React from "react";
import PostListUserStatus from "./PostListUserStatus";
import PostListFriendStatus from "./PostListFriendStatus";
import Container from 'react-bootstrap/Container';


const PostList = () => {
  return(
    <React.Fragment>
      <Container className="mt-5">
        <PostListUserStatus />
        <PostListFriendStatus />
      </Container>
    </React.Fragment>
  )
};

export default PostList;