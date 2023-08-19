import { products } from "./Constants/Data.js";
import product from "./Model/Product-schema.js";


const DefaultData = async()=>{
    try{
        //  await product.deleteMany({})

        await product.insertMany(products);
        console.log("Data inserted into MongoDB")


    }
    catch(e){
        console.log('Error is ',e.message)
    }

}


export default DefaultData