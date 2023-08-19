import { Box,styled } from "@mui/material"
import Slide from "./Slide"

const Component = styled(Box)`
display:flex;
`
const LeftComponent = styled(Box)(({theme}) => ({
width : '83%',
[theme.breakpoints.down('md')]:{
  width:'100%'
}
}))



const RightComponent = styled(Box)(({theme}) =>({


background:'#FFFFFF',
paddingTop:10,
paddingBottom:5,
marginTop:10,
marginLeft:10,
width:'17%',
textAlign:'center',
[theme.breakpoints.down('md')]:{
        display:'none'
}

}))




const MidSlide = ( { products ,title,  Tiimer}  )=>{

 const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

     return(
       
       <Component >
            <LeftComponent>
              <Slide
                  products = {products} 
                  title = {title}
                  Tiimer={Tiimer}
                />
              </LeftComponent>

              < RightComponent> 
                  <img src ={ adURL} alt ="adImage" style={{width:228}}/>
              </ RightComponent>
       </Component >
     )
}
export default MidSlide