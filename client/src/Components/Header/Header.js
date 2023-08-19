import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Box, Typography ,IconButton,Drawer,List,ListItem} from '@mui/material'
import {Menu} from '@mui/icons-material';
import Search from './Search';
import { Link } from 'react-router-dom';
import CustomButtons from './CustomButtons';

const StyleHeader = styled(AppBar)`
background:#2874f0;
height:55px
  `;
const Componenet = styled(Box)`
  margin-left : 12%;
  line-height : 0px;
 
  `
const SubHeading = styled(Typography)`
  font-size:10px;
  font-style:italic;
  `
const PlusImage = styled('img')({
  width: 10,
  height: 10,
  marginLeft: 4
});

const CustomButtonsWrapper = styled(Box)(({theme})=>({
  [theme.breakpoints.down('md')]:{
    display:'none'
  }
}))

 const MenuIcon = styled(IconButton)(({theme})=>({
        display:'none',
        [theme.breakpoints.down('sm')]:{
          display:'block',
          color:'#FFFFFF'
        }
 }))

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  
      const[open,setOpen]=useState(false)

    const onHandleOpen = ()=>{
            setOpen(true);
    }


    const onHandleClose = ()=>{
            setOpen(false);
    }

    const List1 = ()=>(
      <Box style={{width:200}} onClick={onHandleClose}>
            <List>
              <ListItem>
                <CustomButtons/>
              </ListItem>
            </List>
      </Box>
    )

  return (
    <div>
      <StyleHeader>
        <Toolbar style={{minHeight: '55px'}}>
          <MenuIcon onClick={onHandleOpen}>
              <Menu/>
          </MenuIcon>

          <Drawer open = {open} onClose={onHandleClose}>{List1()}</Drawer>
          
         
                  < Componenet >
                    <Link to={`/`} style={{color:'inherit', textDecoration:'none'}}>
                    < img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                      <SubHeading >
                        Explore&nbsp;
                        <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>

                      </SubHeading >
                      <PlusImage src={subURL} alt="" />
                    </Box>
                    </Link>

                  </ Componenet>
            
          <Search />
         < CustomButtonsWrapper>
            <CustomButtons/>
          </CustomButtonsWrapper>

        </Toolbar>
      </StyleHeader>
    </div>
  )
}

export default Header
