

import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box,Button,styled  } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../Redux/Actions/cartAction';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const LeftWrapper = styled(Box)(({theme})=>({
minWidth:'40%',

padding:'40px 0 0 80px',
[theme.breakpoints.down('md')]:{
    padding:'20px 40px'
}
}))

const Image = styled('img')({
//   paddingLeft:30,
width:'95%',
padding:'15px'
  
});
const StyleButton = styled(Button)(({theme})=>({
    width:'48%',
    height:'50px',
    borderRadius:'2px',
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }
}))

   

const ActionItem =({product}) =>{
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1)
    const { id } = product;
    
    
    const addItemToCart = () =>{
        dispatch(addToCart(id,quantity))
        navigate('/cart')
       
    }

    return(
            <LeftWrapper> 
                <Box style={{ padding:'15px 20px', border:'1px solid #F0F0F0',width:'90%' ,marginTop:20 }}>
                <Image src={product.detailUrl} alt="detailedImage" />
                </Box>  
                 <StyleButton variant ='contained' style={{marginRight:13,background:'#ff9f00', marginTop:10}}><FlashOnIcon/> Buy Now</StyleButton>
                 <StyleButton variant ='contained' style={{background:'#fb541b' , marginTop:10}} onClick={() => addItemToCart()} ><ShoppingCartIcon/>Add To Cart</StyleButton >
            </LeftWrapper>
    )
}
export default ActionItem