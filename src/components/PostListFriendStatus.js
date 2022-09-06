import React from 'react';
import FriendStatus from './FriendStatus';

const mainPostListFriendStatus = [
  {
    name: 'Jimmy Smith',
    status: 'Had a great day at work!',
  },
  {
    name: 'Taylor Swift',
    status: 'Wrote a new sad song!',
  },
  {
    name: 'Lisa Moore',
    status: 'Does anyone want to grab coffee?',
  }
];

function PostListFriendStatus(){
  return (
    <React.Fragment>
      <hr/>
      {mainPostListFriendStatus.map((friendStatus, index) => (
        <FriendStatus name={friendStatus.name}
          status={friendStatus.status}
          key={index}/>
      ))}
    </React.Fragment>
  );
}

export default PostListFriendStatus;