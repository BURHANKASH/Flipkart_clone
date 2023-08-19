import mongoose from "mongoose";


const ProdctSchema = new mongoose.Schema({
    id: {

        type:String,
        unique:true,
        required:true
       
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String


})

 const product= mongoose.model('productData',ProdctSchema)
export default product




