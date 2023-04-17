import React, { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
const initialValues = {
    name:"",
    email : "",
    username:"",
    password:"",
  };
function RegistrationForm(props){
    const [values, setValues] = useState(initialValues);
    const [showpassword,setshowpassword]=useState(false)
    const handleShowPassword =()=>{
        setshowpassword(!showpassword)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
    const handleDataPassing=()=>{
      props.childToParent(values)
    }
    return(
        <div>
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" onChange={handleInputChange}/>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="text" name="email" onChange={handleInputChange}/>
            </div>
            <div>
                <label for="username">UserName</label>
                <input type="text" name="username" onChange={handleInputChange}/>
            </div>
            <div>
                <label for="password">PassWord</label>
                <input type={showpassword?"text":"password"} name="password" onChange={handleInputChange}/>
                <IconButton   onClick={handleShowPassword}>
                   {showpassword ?<VisibilityIcon/>:<VisibilityOffIcon/>}
                </IconButton>
            </div>
            <div>
                <button onClick={handleDataPassing} >Register</button>
            </div>
        </div>
    )
}
export default RegistrationForm;