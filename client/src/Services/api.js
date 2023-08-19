import axios from 'axios';

 const URL ='http://localhost:8000';

 export const authenticationsignup =async (Data) =>{
    try{
      return   await axios.post(`${URL}/signup`, Data)
    }
    catch(e){
        console.log("Signup error is ",e.message);
    }
}
export const authenticationLogin =async (Data) =>{
  try{
    return   await axios.post(`${URL}/login`, Data)
  }
  catch(e){
      console.log("Login error is ",e.message);
      return e.response;
  }
}
