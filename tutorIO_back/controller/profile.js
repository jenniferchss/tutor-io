const User = require("../models/userModel");
const Profile = require("../models/profileModel");

exports.editProfile = async(req,res) => {
    const { name,
            year,
            faculty,
            major} = req.body;
    try {
        const profile = await Profile.updateOne({_id : req.user._id}, 
            );
    
        
    } catch (e) {
        res.send({ message: "Error in Fetching profile" });
    }
}