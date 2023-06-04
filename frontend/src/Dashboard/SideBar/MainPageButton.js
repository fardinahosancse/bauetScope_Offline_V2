import React from "react";
import Button from "@mui/material/Button";
import GroupsIcon from "@mui/icons-material/Groups";
import Diversity2Icon from '@mui/icons-material/Diversity2';

const MainPageButton = () => {
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
    >
      <Diversity2Icon />
    </Button>
  );
};

export default MainPageButton;
