import React from 'react'
import { useState,useContext } from 'react'
import {authenticationsignup,authenticationLogin} from '../../Services/api'

import { DataContext } from '../../Context/DataProvider'

import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
const Component = styled(Box)`
height:70vh;
width:90vh;
`
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:3;
& > div, & > button, & > p {
    margin-top:20px;
}
`

const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
width:30%;
padding:45px 35px;
& > p {
    color: lightgrey;
    font-weight:600;
};
 &>h5{
    color:#FFFFFF;
    font-weight:600;

}
`
const LoginButton = styled(Button)`
text-transform:none;
background:#FB641B;
color:#FFF;
border-radius:2px;`
const RequestButton = styled(Button)`
text-transform:none;
background:#FFF;
color:#2874f0;
border-radius:2px;
box-shadow: 0px 2px 3px 1px rgb(0 0 0 / 20%);`
const Text =styled(Typography)`
font-size:12px;
color:#878787;
`
const AccountText = styled(Typography)`
color:#2874f0;
font-weight:600;
text-align:center;
cursor:pointer;
font-size:14px;`

const Error = styled(Typography)`

font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;

`


const LoginDialog = ({ props, setOpen }) => {
    const AccountInitialVAlues = {
        login:{
            view :"login",
            heading:"Login",
            Subheading:"Get access to your Orders,Wishlists and Recommendations",
        },
        Signup:{
            view:"Signup",
            heading:"Looks like you're new here!",
            Subheading:"Signup with your mobile number to get started"
        }
    };
    const signupinitialvalue ={
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:'',
        phone:'',
    };
    const loginInitialValues = {
        username:'',
        password:'',
    }

    const[account,toggleAccount] = useState( AccountInitialVAlues.login);
    const[signup,setsignup] = useState(signupinitialvalue);
    const[login,setLogin] = useState(loginInitialValues);
    const[error,setError] = useState(false)
    const{setAccount}=useContext(DataContext)
    const toggleSignup =()=>{
        toggleAccount(AccountInitialVAlues.Signup)
    }
    const handleClose = () => {
        setOpen(false);
        toggleAccount(AccountInitialVAlues.login);
        setError(false)

    }
    const onInputChange = (e)=>{
        setsignup({...signup,[e.target.name]:e.target.value})
        console.log(signup)
    };
    const Signupuser = async() => {
      let res= await  authenticationsignup(signup);
      if(!res) return;
      handleClose();
      setAccount(signup.firstname)

    };
    const onValueChange =(e) =>{
        setLogin({...login,[e.target.name]:[e.target.value]})


    };
    const loginUser =async() =>{
      let res= await authenticationLogin(login);
      console.log(res)
      if(res.status === 200){
        handleClose();
        setAccount(res.data.data.firstname);
      }
      else{

        setError(true )
      }
    }

    return (
        <div>
            <Dialog open={props} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
                <Component>

                    <Box style={{ display: 'flex' ,height:'100%'}}>
                        <Image>
                            <Typography variant='h5'>{account.heading}</Typography>
                            <Typography style={{marginTop:20}}>{account.Subheading}</Typography>
                        </Image>
                        { 
                        account.view ==='login' ?
                            <Wrapper>
                                <TextField label="Enter Email/Mobile number" variant="standard"  onChange={(e)=>onValueChange(e)} name='username'/>
                             
                              {error &&  <Error>Please enter valid username</Error>}
                             
                                <TextField label="Enter Password" variant="standard" onChange={(e)=>onValueChange(e)} name='password' />
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                                <Typography style={{textAlign:'center'}}>OR</Typography>
                                <RequestButton>Request OTP</RequestButton>
                                <AccountText onClick={()=>toggleSignup()}>New to Flipkart? Create an account</AccountText>
                            </Wrapper>:
                            <Wrapper>
                                <TextField label="Enter Firstname" variant="standard" onChange={(e)=>onInputChange(e)} name='firstname' />
                                <TextField label="Enter Lastname" variant="standard" onChange={(e)=>onInputChange(e)}  name='lastname'/>
                                <TextField label="Enter Username" variant="standard"onChange={(e)=>onInputChange(e)}  name='username' />
                                <TextField label="Enter Email" variant="standard"onChange={(e)=>onInputChange(e)}  name='email' />
                                <TextField label="Enter Password" variant="standard" onChange={(e)=>onInputChange(e)} name='password'/>
                                <TextField label="Enter Phone" variant="standard" onChange={(e)=>onInputChange(e)}  name='phone'/>
                                <LoginButton onClick={()=>Signupuser()}>Continue</LoginButton>
                            </Wrapper>
                        }



                    </Box>
                </Component>
            </Dialog>
        </div>
    )
}

export default LoginDialog
