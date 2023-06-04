import React, { useState } from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";


const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#212121",
  fontSize: 15,
};

const BauetScopeLogo = () => {
  

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="BAUET-SCOPE"
        
      />
      
     
    </>
  );
};

export default BauetScopeLogo;
