import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import logo from './signup.png';
import bg from './bg.jpeg'


const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "url(https://raw.githubusercontent.com/fardinahosancse/bg_web/main/bg.jpeg) no-repeat center center",
  
  backgroundSize: 'cover',
});

const AuthBox = (props) => {
  return (



    
    <BoxWrapper>

<Box
        component="img"
        sx={{
          height: 433,
          width: 256,
         
        }}
        alt="The house from the offer."
        src={logo}
      />


    
      <Box
        sx={{
          width: 400,
          height: 520,
          
          backdropFilter: "blur(52px)",
          borderRadius: "5px",
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {props.children}
      </Box>



      
    </BoxWrapper>
  );
};

export default AuthBox;
