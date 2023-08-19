import { Box,Button,Divider,Typography,styled } from '@mui/material';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom';
const Component = styled(Box)`
margin-top : 10px;
background:#FFFFFF;
`
const Deal = styled(Box)`
padding:15px 20px;
display:flex;
`
const Timer = styled(Box)`
display:flex;
margin-left:10px;
color:#7f7f7f;
align-items:center;

`

const DealText = styled(Typography)`

font-size:22px;
margin-right:20px;
line-height:32px;
font-weight:600;
`

const ViewAll = styled(Button)`
margin-left:auto;
backgroud-color:#2874f0;
border-radius:2px;
text-transform:uppercase;
font-size:14px;
font-weight:600;

`

const Image = styled('img')(({theme}) => ({
    width:'auto',
    height:150,
    marginLeft:33,
   [theme.breakpoints.down('sm')]:{
    marginLeft:0,
    marginRight:33
   }
}));

const Text = styled(Typography)`
font-size:14px;
margin-top:5px;


`



const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

    const Slide = ({products , title ,Tiimer})=>{
        const renderer = ({hours,minutes,seconds})=>{
            return <Box >{hours}:{minutes}:{seconds} left</Box>
        }
        const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return(
        <Component>

            <Deal>

                <DealText>{title}</DealText>
             
              
                 {
                            Tiimer &&
             
                <Timer>
                <img src={timerURL} alt="timer" style={{width:24 }} />
                <Countdown style={{margin:10}} date={Date.now() + 5.04e+7}  renderer = {renderer}  />
                </Timer>
    }
    
                <ViewAll variant = 'contained' color='primary'>View ALL</ViewAll>
            </Deal>
            <Divider></Divider>
                    <Carousel
                     responsive={responsive}
                     autoPlay={ true }
                     autoPlaySpeed={3000}
                     infinite={true}
                     swipeable={false}
                     draggable={false}
                     containerClass="carousel-container"
                     dotListClass="custom-dot-list-style"
                     itemClass="carousel-item-padding-40-px"
                     centerMode={true}
                     
                     >
                            {
                               
                                products.map(product => (
                                    <Link  to={`product/${product.id}`} style={{textDecoration:'none'}}>
                                        <Box style ={{padding:'25px' ,alignItems:'center'}} >
                                            <Image src ={product.url} alt ="demo" />
                                            <Text style={{fontWeight:600,color:'#212121',textAlign:'center'}}>{product.title.shortTitle}</Text>
                                            <Text style={{color:'green',textAlign:'center'}}>{product.discount}</Text>
                                            <Text style={{color:'#212121',opacity:.6,textAlign:'center'}}>{product.tagline}</Text>
                                        </Box>
                                    </Link>
                                ))
                            }
                    </Carousel>

        </Component>
    )
}
export default  Slide;
