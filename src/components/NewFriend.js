import React from "react";
import PropTypes from "prop-types";

function NewFriend(props){
  return (
    <React.Fragment>
      <img src="" alt="friend"/>    
      <h3>{props.name}</h3>
      <button href="#">ADD FRIEND</button>
      <hr/>
    </React.Fragment>
  );
}

NewFriend.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NewFriend;