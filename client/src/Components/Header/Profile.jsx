import { Box, Typography,Menu,MenuItem,styled } from '@mui/material'
import { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';



const Component = styled(Menu)`
margin-top:5px;
`
const Logout = styled(Typography)`
margin-left:20px;
font-size:14px;`

const Profile = ({account1,setAccount}) => {
  const [open,setOpen]=useState(false);
  const handleClick = (event) =>{
    setOpen(event.currentTarget)
  }
  const handleClose =()=>{
    setOpen(false);
  };

  const LogoutUser = ()=>{
    setAccount('')

  }
  return (
    <>
      <Box onClick = {handleClick}><Typography style={{marginTop:2,cursor:'pointer ',marginLeft:70}}>{account1}</Typography></Box>
      <Component
       
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={()=>{handleClose(); LogoutUser();}}>
          < PowerSettingsNewIcon color = 'primary' fontSize='small'/>
          <Logout >Logout</Logout >
        </MenuItem>
       
      </Component>
    </>
  )
}

export default Profile
