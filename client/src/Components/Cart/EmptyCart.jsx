import { Typography,Box,styled } from "@mui/material";





const Components = styled(Box)`
width:80%;
background:#fff;
height:64vh;
margin:80px 140px;
`
const Conatiner = styled(Box)`
padding-top:100px;
text-align:center;`


    
const EmptyCart = () => { 
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    return (
        <Components>
            <Conatiner>
                    <img src={imgurl} alt="EmptyCartImage"  style={{width:'20%'}}/> 
                    <Typography>Your  cart is empty!</Typography>
                    <Typography>Add items to it now</Typography>
            </Conatiner>
        </Components>
    )
} 

export default EmptyCart;