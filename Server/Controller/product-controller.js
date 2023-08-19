import product from "../Model/Product-schema.js"



export const getProducts = async(req,res)=>{
    try{  
        const products=await product.find({})
        return res.status(200).json(products)
        
    }
    catch(e){
        res.status(500).json(e.message)
    }
}


export const getProductById = async(req,res) =>{
   try{
           const { id } = req.params; 
            const product1 =  await product.findOne({'id':id})
            res.status(200).json(product1)
    }  
   catch (error){
            res.status(500).json({message:error.message})
   }
}   






