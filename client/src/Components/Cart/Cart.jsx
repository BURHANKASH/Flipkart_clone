import { Grid, Typography,Box,styled,Button } from "@mui/material"
import { useSelector } from "react-redux"

import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import TotalView from './TotalView'

const Container = styled(Grid)(({theme}) => ({
        padding:'30px 135px',
        [theme.breakpoints.down('md')]:{
            padding:'15px 0'
        }
}))

const Header = styled(Box)`  
    padding:15px 24px;
    background:#fff;

`
const ButtonWrapper = styled(Box)`
padding:15px 22px;
box-shadow:0px -2px 10px 0 rgb( 0 0 0 / 10%);
background:#fff;
border-top: 1px solid #f0f0f0;
`
const StyleButton = styled(Button)`
display:flex;
margin-left:auto;
background:#fb641b;
border-radius:2px;
color:#fff;
width:250px;
height:50px;

`
const LeftComponent = styled(Grid)(({theme}) => ({
paddingRight:15,
[theme.breakpoints.down('md')]: {
    marginBottom : 15
}
}))


const Cart = () => {
    const {cartItems} = useSelector(state => state.cart)
    return(
        
        <>
            {
                cartItems.length ?
                <Container  container>
                    <LeftComponent item lg={9} md={9} sm={12} xs ={12}>
                                <Header>
                                    <Typography>My Cart ({cartItems.length})</Typography>
                                </Header>
                                {
                                    cartItems.map(item =>(
                                        <CartItem item = {item} />
                                    ))
                                }
                                <ButtonWrapper>
                                    <StyleButton>Place Order</StyleButton>
                                </ButtonWrapper>

                    </LeftComponent>
                    <Grid item lg={3} md={3} sm ={12} xs={12}>

                        <TotalView cartItems = {cartItems }/>
                    </Grid>

                    
                </Container >
                : <EmptyCart />

            }
        </>
    )
}
export default Cart