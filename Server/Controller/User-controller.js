import user from '../Model/User-Schema.js'



export const userSignup = async (req, res) => {
    try {
        const exist = await user.findOne({ username: req.body.username })
        if (exist) {
            return res.status(401).json({ message: 'Already Exist' })
        }

        const User = req.body
        const NewUser = new user(User)
        await NewUser.save();
        res.status(200).json({ message: User })

        
        //  by bellow method same thing happens ! 
        //   console.log(req.body)
        //    const User = req.body;
        //     await user.insertMany(User)
        //     console.log(req.body)

    }
    catch (e) {
        res.status(404).json({ message: e.message })
    }
}
export default userSignup


// for Login
export const userLogin =async(req,res)=>{
try{

    const username=req.body.username;
    const password=req.body.password;

    let userss=await user.findOne({username:username,password:password});
    if(userss){
    return res.status(200).json({data:userss})
    }

    else{
        return res.status(410).json(`Invalid user`)
    }
}catch(e){
    res.status(500).json(`error is ${e}`)

}
}