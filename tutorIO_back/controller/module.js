const Module = require("../models/profileModel");
const axios = require("./axios");

exports.createModuleAddTutor = async(req, res) =>  {
    try{
        const reqModule = req.module
        const reqTutor = req.tempTutor.userID
        const tempModule = await Module.find({"moduleCode": reqModule})
        
        if(!tempModule) {
            let module = new Module({
                "moduleCode":  reqModule,
                $push: {"tutorsTeaching": reqTutor},
                numOfTutors: 1
            })
            module.save();
            res.json("Module created and Tutor added");
        } else {
            tempModule.tutorsTeaching.push(reqTutor);
            numOfTutors.add(1);
            res.json("Tutor added");
        }
    } catch (err) {
        res.status(400).json({ message: "Error in saving module" });
    }
}

exports.getTeachingTutor = async(req, res) => {
    try {
        const reqModule = req.body
        const module = await Module.find({"moduleCode": reqModule})
        const teachingTutors = module.tutorsTeaching
        res.json(teachingTutors);

    } catch(err) {
        res.status(400).json({message: "Error in fetching tutor"})
    }
}

exports.removeTutor = async (req, res) => {
    try {
        const reqModule = req.module
        const reqTutor = req.tempTutor.userID
        
        await Module.updateOne(
            {"moduleCode": reqModule},
            {$pull: { "tutorsTeaching": reqTutor }},
            {"$inc": { "numOfTutors": -1 } }
        );

        res.json({message: "Removed tutor from this module"});

    } catch (err) {
        res.status(400).json({message: "Error in removing tutor"})
    }
}

exports.getListOfModules = async (req, res) => {
    try {
        axios().get('https://api.nusmods.com/2018-2019/1/moduleCodes.json')
        .then(res => response.json())
        .then(async responseJson => {
            var result = [];
            var counter = 0;
            responseJson.map(x => {
                var parseMod = {};
                parseMod['id'] = counter;
                parseMod['name'] = x;
                counter++;
                result.push(parseMod);
            });

            res.json(result);
        })  
    } catch (err) {
            res.json({message: "Error in fetching modules"})
    }
}

