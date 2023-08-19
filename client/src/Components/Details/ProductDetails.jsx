import {Box,Typography,Table,TableBody,TableRow,TableCell,styled} from '@mui/material'

import {LocalOffer as Badge}  from '@mui/icons-material';

const SmallText =styled(Box)`
    font-size:4px;
    vertical-align:baseline;
    & > p {
        font-size:14px;
        margin-top:10px;
    }
`
const StyledBadge = styled(Badge)`
   margin-right:10px;
   color:#00cc00;
   font-size:15px;

`
const SizeChange = styled(TableRow)`
vertical-align:baseline;
& > td {
    font-size:14px;
    
}

`

const ProductDetails = ({product}) =>{
     const date = new Date(new Date().getTime()+(5*24*60*60*1000))
     const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return(
        <>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge/>Bank OfferFlat Off ₹500 On ICICI CardT&C</Typography>
                <Typography><StyledBadge/>Bank Offer10% off on Bank of Baroda Credit Card Txns, up to ₹1,500 on orders of ₹5,000 and aboveT&C</Typography>
                <Typography><StyledBadge/>Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C</Typography>
                <Typography><StyledBadge/>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More </Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <SizeChange >
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </SizeChange >
                    <SizeChange >
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell >
2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.) </TableCell>
                    </SizeChange >
                    <SizeChange >
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell >
                            <Box variant = 'span' style={{color:'#2874f0'}}>TBsmart</Box>
                            <Typography style={{fontSize:14}}>7 Days Service Center Replacement/Repair</Typography>
                            <Typography style={{fontSize:14}}>GST invoice available</Typography>
                        </TableCell>
                        
                    </SizeChange >
                    <SizeChange >
                        <TableCell colSpan={2} >
                            <img src={adURL} alt="SuperCoins" style={{width:390}} />
                        </TableCell>
                       
                    </SizeChange >
                    <SizeChange >
                        <TableCell style={{color:'#878787'}}>Description</TableCell>
                        <TableCell style={{fontSize:14}}>{product.description}</TableCell>
                    </SizeChange >
                </TableBody>
            </Table>
        </>
    )
}
export default ProductDetails