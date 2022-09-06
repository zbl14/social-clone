import React from "react";
import PropTypes from "prop-types";

function FriendStatus(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.status}</p>
      <hr/>
    </React.Fragment>
  );
}

FriendStatus.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default FriendStatus;