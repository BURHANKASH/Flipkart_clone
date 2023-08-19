import NavBar from "./NavBar"
import Banner from "./Banner"
import MidSection from "./MidSection"
import {Box,styled} from '@mui/material'
import { useEffect } from "react"
import { getProducts } from "../../Redux/Actions/ProductActions"
import { useDispatch, useSelector } from "react-redux"
import Slide from "./Slide"
import MidSlide from "./MidSlide" 
const ColorContainer = styled(Box)`
padding:10px;
background:#F2F2F2;
`

const Home =()=>{

   const {products} =   useSelector((state) => state.getProducts) 
        console.log(products)
        const dispatch = useDispatch();

    useEffect(() =>  {
//getProducts() we cant call this function here directly because it is dispatched

            dispatch(getProducts())
            
    }, [dispatch])
    // 
    return(
        <>
         <NavBar/>
         <ColorContainer>
         <Banner/>
         <MidSlide products ={products} title = 'Deal of the day' Tiimer= {true}/>
         <MidSection/>
         <Slide products ={products} title = 'Discounts for you' Tiimer= {false}/>
         <Slide products ={products} title = 'Suggesting Items' Tiimer= {false}/>
         <Slide products ={products} title = 'Suggesting Items' Tiimer= {false}/>
         <Slide products ={products} title = 'Top Selection' Tiimer= {false}/>
         <Slide products ={products} title = 'Recomended Items' Tiimer= {false}/>
         <Slide products ={products} title = 'Trending Offers' Tiimer= {false}/>
         <Slide products ={products} title = " Season's top picks" Tiimer= {false}/>
         <Slide products ={products} title = "Top deals on Accessories" Tiimer= {false}/>
         </ColorContainer>
        
        </>

    )
}
export default Home