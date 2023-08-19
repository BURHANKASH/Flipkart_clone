
import { Box,Button,Typography,styled} from "@mui/material"

import { addEllipsis } from "../../utils/Common-utils"
import {removeFromCart} from '../../Redux/Actions/cartAction';
import { useDispatch } from "react-redux";
import ButtonGroup from "./ButtonGroup"


const Component = styled(Box)`
display:flex;
border-top:1px solid#f0f0f0 ;
background:#FFFFFF;
`
const LeftComponent = styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
 
`
const SmallText = styled(Box)`
    font-size:14px;
    color:#878787;
    margin-top:10px;
`
const Remove = styled(Button)`
        margin-top:20px;
        font-size:16px;
        color:#000;
        font-weight:600;
`

const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
        const dispatch = useDispatch();
        const removeItemFromCart = (id) => {
                dispatch(removeFromCart(id));

        }

    return(
        <Component>
            <LeftComponent>
                <img src = {item.url} alt = "CartPicture" style={{width:125}}/>
                <ButtonGroup/>
            </LeftComponent>
            <Box style={{margin:20}}>
            <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>  
                        <Typography>Seller:TBsmart
                        <Box component="span"><img src= {fassured} alt="pic" style={{width:50, marginLeft:10}} /></Box>
                        </Typography>
                </SmallText>
                <Typography style={{ margin:'20px 0'}}>
                    <Box component='span' style={{fontWeight:600 , fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{color:'388E3C'}}>{item.price.discount}</Box>&nbsp;&nbsp;&nbsp;
                </Typography>
                <Remove onClick={()=>removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}
export default CartItem