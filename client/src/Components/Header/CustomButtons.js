import { Box,Typography,styled ,Badge} from '@mui/material'
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';
import { useState,useContext } from 'react';
import Profile from './Profile';
import {Link} from "react-router-dom"
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { DataContext } from '../../Context/DataProvider';
const Dwrapper = styled(Box)(({theme})=>({


display:'flex',
alignItems:'center',
'& > button,& > p ,& > div':{
    marginRight:'40px',
    fontSize:'16px'
},
[theme.breakpoints.down('sm')]:{
    display:'block'
}
}))
const Cart = styled(Link)(({theme})=>({
    display:'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('sm')]:{
        display:'block',
    }

}))


const LoginButton = styled(Button)`
color:#2874f0;
background-color:white;
text-transform:none;
border-radius:2px;
box-shadow:none;
font-weight:600;
padding:1px 40px;
margin-left:70px;
` 
const CustomButtons = () =>{
    const[open,setOpen]=useState(false);
    const {account1,setAccount} = useContext(DataContext)
    const {cartItems} = useSelector(state => state.cart)
    const openDialog=() =>{
        setOpen(true);
    }

    return(
        <Dwrapper>

            {
                account1 ? <Profile account1={account1} setAccount ={setAccount}/> :
                <LoginButton  variant='contained' onClick={()=>openDialog()} >Login</  LoginButton>
            }
           
            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>
            <Cart to = '/cart'>
                <Badge badgeContent = {cartItems?.length} color='secondary'>
                <ShoppingCartIcon/>
                </Badge>
                <Typography style={{marginLeft:7}}>Cart</Typography>
                
            </Cart>
            <LoginDialog props={open} setOpen={setOpen}/>
        </Dwrapper>
    )
    
}
export default CustomButtons