import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import VideoChatIcon from '@mui/icons-material/VideoChat';

import * as roomHandler from "../../realtimeCommunication/roomHandler";

const CreateRoomButton = ({ isUserInRoom }) => {
  const createNewRoomHandler = () => {
    roomHandler.createNewRoom();
  };

  return (
    <Button
      disabled={isUserInRoom}
      onClick={createNewRoomHandler}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "5px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "#66BB6A",
        backgroundColor: "white",
      }}
    >
      <VideoChatIcon />
    </Button>
  );
};

export default CreateRoomButton;
