import React from 'react'

import { navData } from '../../Constants/Data'
import { Box,Typography,styled} from '@mui/material'
const Navconatainer= styled(Box)(({theme})  =>({
display:'flex',
margin:'54px 134px 0px 134px',
justifyContent:'space-between',
// overflow:'overlay',
overflow:'hidden',

[theme.breakpoints.down('lg')]:{
  margin:'54px 0px 0px 0px'
}
}))

const ImageNText = styled(Box)`
text-align:center;
padding-bottom:7px;
`
const Text = styled(Typography)`
font-size:14px;
font-family:inherit;
font-weight:600;


`


const NavBar = () => {
  return (
    <Box style={{background:'#FFFFFF '}}>
   < Navconatainer>
    {
       navData.map(data =>(
        <ImageNText>
            <img src={data.url} alt="navbar" style={{height:64}} />
            <Text >{data.text}</Text >
        </ImageNText >
       )
        

       )
    }
   </ Navconatainer>
   </Box>
  )
}

export default NavBar
