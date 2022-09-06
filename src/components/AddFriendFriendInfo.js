import React from "react";
import NewFriend from './NewFriend';

const mainAddFriendFriendInfo = [
  {
    name: 'Peter Griffin',
    img: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_2000,h_1125,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/dbltap_en_international_web/01g9fvyp6kswjh8pq86p.jpg'
  },
  {
    name: 'Stevie Nicks',
    img: 'https://www.billboard.com/wp-content/uploads/media/stevie-nicks-kristin-burns-billboard-650-2.jpg?w=650'
  },
  {
    name: 'Jackie Chan',
    img: "https://i.insider.com/5267dfc16bb3f78b25452735?width=700"
  }
];

function AddFriendFriendInfo(){
  return (
    <React.Fragment>
      <hr/>
      {mainAddFriendFriendInfo.map((newFriend, index) => (
        <NewFriend name={newFriend.name}
          img={newFriend.img}
          key={index}/>
      ))}
    </React.Fragment>
  );
}

export default AddFriendFriendInfo;