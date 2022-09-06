import React from 'react';
import FriendStatus from './FriendStatus';

const mainPostListFriendStatus = [
  {
    name: 'Jimmy Smith',
    status: 'Had a great day at work!',
    time: 11,
  },
  {
    name: 'Taylor Swift',
    status: 'Wrote a new sad song!',
    time: 15
  },
  {
    name: 'Lisa Moore',
    status: 'Does anyone want to grab coffee?',
    time: 21
  }
];

function PostListFriendStatus(){
  return (
    <React.Fragment>
      <hr/>
      {mainPostListFriendStatus.map((friendStatus, index) => (
        <FriendStatus name={friendStatus.name}
          status={friendStatus.status}
          time={friendStatus.time}
          key={index}/>
      ))}
    </React.Fragment>
  );
}

export default PostListFriendStatus;