import React from "react";
import NewFriend from './NewFriend';

const mainAddFriendFriendInfo = [
  {
    name: 'Peter Griffin',
  },
  {
    name: 'Stevie Nix',
  },
  {
    name: 'Jackie Chan',
  }
];


// const AddFriendFriendInfo = () => {
//   return(
//     <React.Fragment>
//       <img src="" alt="friend"/>
//       <p>Test Friend Name</p>
//       <button href="#">ADD FRIEND</button>
//     </React.Fragment>
//   );
// };

function AddFriendFriendInfo(){
  return (
    <React.Fragment>
      <hr/>
      {mainAddFriendFriendInfo.map((newFriend, index) => (
        <NewFriend name={newFriend.name}
          key={index}/>
      ))}
    </React.Fragment>
  );
}

export default AddFriendFriendInfo;