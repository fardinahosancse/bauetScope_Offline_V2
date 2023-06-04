import React from "react";
import Button from "@mui/material/Button";
import GroupsIcon from "@mui/icons-material/Groups";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import AddTaskIcon from '@mui/icons-material/AddTask';

import { useState } from "react";

const Tasker = () => {
  return (
    <Button
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
      href="/task"
    >
      <AddTaskIcon />


     
    </Button>
  );
};

export default Tasker;



