import React from "react";
import PropTypes from "prop-types";
import Toast from 'react-bootstrap/Toast';

function FriendStatus(props) {
  return (
    <Toast className="mb-4">
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{props.name}</strong>
        <small>{props.time} mins ago</small>
      </Toast.Header>
      <Toast.Body>{props.status}</Toast.Body>
    </Toast>
  );
}

FriendStatus.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default FriendStatus;



