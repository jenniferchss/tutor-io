const Profile = require("../models/profileModel");

const getUserProfile = async (id) => {
    return new Promise ((resolve, reject) => {
        Profile.find({"userID": id})
        .then(profile => {
            resolve(profile)
        })
    })
}

exports.editUserProfile = async(req,res) => {
    const { firstName,
            lastName,
            year,
            faculty,
            major,
            telegram,
            biography,
            qualifications,
             } = req.body;
    try {
        const profile = await Profile.updateOne(
            { "userID" : req.user.id}, 
            { $set: { "firstName": firstName,
                      "lastName": lastName,  
                      "year": year, 
                      "faculty": faculty, 
                      "major": major,
                      "telegram": telegram,
                      "biography": biography,
                      "qualifications": qualifications,
                    }

            })
        res.json("BERHASIL");   
    } catch (e) {
        res.json({ message: "Error in Fetching profile" });
    }
}

exports.getUserProfile = async(req, res) => {
    try {
        const id = req.user.id
        const userProfile = await getUserProfile(id)
        res.json(userProfile);
      } catch (e) {
        res.status(400).json({ message: "Error in Fetching user" });
      }
}

exports.getTeachingTutors = async(req, res) => {
    try{
        let listTutors = req.teachingTutors
        let profileTutors = [];

        for(var i=0; i < listTutors.length(); i++) {
            let profile = await getUserProfile(listTutors[i])
            profileTutors.push(profile)
        }
        res.json(profileTutors);
        
    } catch(err) {
        res.status(400).json({ message: "Error in Fetching user" });
    }
}

