import mongoose from "mongoose"


  const connection = async(USERNAME , PASSWORD) =>{
    const URL=  `mongodb+srv://${USERNAME}:${PASSWORD}@mongodb.lddj7he.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log('Database connected successfully');

    }
    catch(e){
        console.log('Error occured while connecting to the database',e.message)
    }
}

export default connection