const Module = require("../models/moduleModel");
// const axios = require("axios");
var fetch = require('node-fetch');

exports.createModuleAddTutor = async(req, res) =>  {
    try{
        const reqModule = req.body
        console.log("temp Module: " + reqModule)
        const reqTutor = req.tempTutor.userID
        console.log("temp Tutor: " + reqTutor)

        let tempModule = await Module.find({"moduleCode": reqModule.name}).then(items => {
            return items[0]
        })

        console.log(tempModule)

        if(!tempModule) {
            let module = new Module({
                "moduleCode":  reqModule.name,
                "moduleTitle": reqModule.moduleTitle,
                "faculty": reqModule.faculty,
                numOfTutors: 1
            })
            module.tutorsTeaching.push(reqTutor)
            module.save();
            res.json("Module created and Tutor added");
        } else {
            tempModule.tutorsTeaching.push(reqTutor);
            let tempNum = tempModule.numOfTutors
            tempNum++
            tempModule.numOfTutors = tempNum
            tempModule.save();
            res.json("Tutor added");
        }
    } catch (err) {
        res.status(400).json({ message: "Error in saving module" });
    }
}

exports.getTeachingTutor = async(req, res) => {
    try {
        const reqModule = req.body
        console.log(reqModule)
        const module = await Module.find({"moduleCode": reqModule.moduleCode}).then(items => {
            return items[0]
        })

        console.log(module)
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
        
        let tempModule = await Module.find({"moduleCode": reqModule}).then(items => {
            return items[0]
        })

        tempModule.tutorsTeaching.pull(reqTutor);

        let tempNum = tempModule.numOfTutors
        tempNum--
        tempModule.numOfTutors = tempNum
        
        tempModule.save()

        res.json({message: "Removed tutor from this module"});

    } catch (err) {
        res.status(400).json({message: "Error in removing tutor"})
    }
}

exports.getListOfModules = function (req, res) {
    try {
        fetch('https://nusmods.com/api/2018-2019/modules.json')
            .then((response) => {
                return response.json()
            })
            .then(async responseJson => {
                var result = [];
                var counter = 0;
                responseJson.forEach(element => {
                    if (element.CorsBiddingStats) {
                        const obj = {
                            id: counter,
                            name: element.ModuleCode,
                            moduleTitle: element.ModuleTitle,
                            faculty: element.CorsBiddingStats[0].Faculty
                        }
                        counter++
                        result.push(obj)
                    }
                })
                res.json(result);
            })
    } catch (err) {
            console.log(err)
            res.json({message: "Error in fetching modules"})
    }
}

exports.getListofSpecificModules = function (req,res) {
    try {
        const reqFaculty = req.body
        let modules = await Module.find({"faculty": reqFaculty})
        res.json(modules);   
    } catch(err) {
        res.status(400).json({message: "Error in fetching tutor"})
    }
}

    





