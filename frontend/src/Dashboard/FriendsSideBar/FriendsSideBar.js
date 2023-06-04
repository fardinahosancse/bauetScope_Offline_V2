import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import BAUET_SCOPE_LOGO from "./BauetScopeLogo";

import FriendsTitle from "./FriendsTitle";
import FriendsList from "./FriendsList/FriendsList";
import PendingInvitationsList from "./PendingInvitationsList/PendingInvitationsList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  
  backgroundColor: "#C8E6C9" ,
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
 
    <BAUET_SCOPE_LOGO></BAUET_SCOPE_LOGO>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationsList />
    </MainContainer>
  );
};

export default FriendsSideBar;
