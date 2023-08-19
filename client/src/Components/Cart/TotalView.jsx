
import styled from '@emotion/styled';
import{Box,Typography} from '@mui/material'; 
import { useEffect, useState } from 'react';

const Header = styled(Box)`
    background:#fff;
    color:#878787;
    padding:15px 25px;
    
    `
    const TextFields = styled(Box)`
    background:#fff;
    padding:15px 25px;
    & > p {
    margin-bottom:20px;
    font-size:14px
            }
            & > h5{
                font-weight:600;
            }
            
    `

    const SaveText = styled(Typography)`
    color:green;
    padding-top:50px;
    `
    const PriceTag = styled(Box)`
    float:right;
    `;

    



const TotalView = ({cartItems}) => {
   
      const[price,setPrice] =useState(0);
      const [discount,setDiscount] = useState(0);

      useEffect(()=>{
         totalAmount();
      },[cartItems])

   const totalAmount = () => {
      let price = 0, discount = 0 ;
      cartItems.map(item => {
         price +=item.price.mrp;
         discount += (item.price.mrp - item.price.cost)
      });
      setPrice(price);
      setDiscount(discount)
    }
    
    return(
       <Box>
        <Header>
            <Typography>PRICE DETAILS</Typography>
        </Header>
        <TextFields >
             <Typography>Price ({cartItems?.length} item)
                <PriceTag  component='span'>{price}</PriceTag >
             </Typography>
             <Typography>Discount
                <PriceTag  component='span'>{discount}</PriceTag >
             </Typography>
             <Typography>Delivery Charges
                <PriceTag  component='span'>₹38</PriceTag >
             </Typography>
             <Typography variant='h5'>Total Amount
                <PriceTag  component='span'>{price - discount + 38}</PriceTag >
             </Typography>
             <SaveText>You will save ₹{discount - 38} on this order </SaveText>
        </TextFields >
       </Box>
    )
}
export default TotalView