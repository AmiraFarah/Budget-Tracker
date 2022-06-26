const User = require('../../models/User')


// crreate a user 
const create = async (req,res)=>{
   try{

    createdUser = await User.create(req.body)
    res.status(200).json(createdUser)
}
catch(e){
    res.status(400).json({msg:e.message})
}
}
// find a user 
const show = async (req, res) => {

    try {
       const foundUser = await User.findById(req.params.id)
        res.status(200).json(foundUser)

    } catch (e) {
        res.status(400).json({ msg: e.message })

    }
}

// update a user 
const update = async (req, res) => {

    try {
       const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updatedUser)

    } catch (e) {
        res.status(400).json({ msg: e.message })

    }
}
module.exports = {
    create , 
    show ,
    update
}