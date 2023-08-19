import {Grid,styled} from "@mui/material"
import {imageURL } from '../../Constants/Data'


const Wrapper = styled(Grid)`
margin-top:10px;
justify-content:space-between;
`
const Image1 =styled ('img')(({theme}) =>({
   marginTop:10,
   width:'100%',
   display:'flex',
   justifyContent:'space-between',
   [theme.breakpoints.down('md')]:{
                
            height:120,
            objectFit:'cover',   
        
   }
}));


function MidSection() {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Wrapper lg={12} md={12} sm={12} xs={12} container>

                {imageURL.map(image => (
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <img src={image} alt="pics" style={{ width: '100%' }} />
                    </Grid>
                ))}
            </Wrapper>
            <Image1 src={url} alt="Covid" />
        </>
    );
}
export default MidSection