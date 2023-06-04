import React from "react";
import { Typography } from "@mui/material";

const FriendsTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        
        color: "black",
        fontSize: "14px",
        marginTop: "15px",
        borderRadius: "1px",
        marginTop: "10px",
        color: "#66BB6A",
        backgroundColor: "white",

      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
