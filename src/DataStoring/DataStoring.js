import React, { useState } from "react";
import RegistrationForm from  '../RegistrationForm/RegistrationForm';
function DataStoring(){
  const [userData,setUserData]=useState()
  const childToParent=(obj)=>{
    setUserData(obj)
  }

    return(
        <div>
          <RegistrationForm childToParent={childToParent}/>
        </div>
    )
}
export default DataStoring;