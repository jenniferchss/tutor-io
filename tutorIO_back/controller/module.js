const Module = require("../models/moduleModel");
const Tutor = require("../models/tutorModel");
// const axios = require("axios");
var fetch = require('node-fetch');
const { getNodeText } = require("@testing-library/react");

const getAllModulesFromFaculty = async (fac) => {
    return new Promise ((resolve, reject) => {
        Module.find({"faculty": fac})
        .then(modList => {
            resolve(modList)
        })
    })
}

const findModule= async (moduleCode) => {
    return new Promise ((resolve, reject) => {
        Module.findOne({"moduleCode": moduleCode})
        .then(module => {
            console.log("Module found: "+ module)
            resolve(module)
        })
    })
}

const findTutor = async(id) => {
    return new Promise((resolve,reject) => {
        Tutor.findOne({"userID" : id})
        .then(tutor => {
            resolve(tutor)
        })
        .catch(err => reject(err.message))
    })
}


exports.createModuleAddTutor = async(req, res) =>  {
    try{
        const reqModule = req.body
        console.log("temp Module: " + reqModule)
        const reqTutor = req.tempTutor
        console.log("temp Tutor: " + reqTutor)

        // let tempModule = await Module.find({"moduleCode": reqModule.name}).then(items => {
        //     return items[0]
        // })

        let tempModule = await findModule(reqModule.name)

        console.log(tempModule)

        if(!tempModule) {
            let module = new Module({
                "moduleCode":  reqModule.name,
                "moduleTitle": reqModule.moduleTitle,
                "faculty": reqModule.faculty,
                numOfTutors: 1
            })
            console.log("ini req Tutor" + reqTutor)
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

exports.getTeachingTutor = async(req, res, next) => {
    try {
        let reqModule = req.params.module
        
        const module = await findModule(reqModule)

        let teachingTutors = module.tutorsTeaching
        console.log(teachingTutors)
        req.teachingTutors = teachingTutors
        next();
    } catch(err) {
        res.status(400).json({message: "Error in fetching tutor"})
    }
}

exports.removeTutor = async (req, res) => {
    try {
        const reqModule = req.module
        const reqTutor = req.tempTutor
        
        let tempModule = await findModule(reqModule)

        if(tempModule.tutorsTeaching.includes(reqTutor)) {
            tempModule.tutorsTeaching.pull(reqTutor);

            let tempNum = tempModule.numOfTutors
            tempNum--
            tempModule.numOfTutors = tempNum
            
            tempModule.save()
    
            res.json({message: "Removed tutor from this module"});
        } else {
            res.json({message: "User is not a tutor of this module"})
        }
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

exports.getListofSpecificModules = async (req,res) => {
    try {
        let reqFaculty = req.params.faculty
        let fac = reqFaculty.split("_")
        fac = fac.join(" ").trim();
        console.log("fac = " + fac);
        let modules = await getAllModulesFromFaculty(fac)
        console.log(modules)
        res.json(modules);   
    } catch(err) {
        res.status(400).json({message: "Error in fetching tutor"})
    }
}


//Only when tutor deactivate their tutor status
exports.removeTaughtModules = async (req, res, next) => {  
    try {
        const ID = req.user.id
        let tutor = await findTutor(ID)
        let taughtMods = await tutor.taughtModules

        for(let i =0; i<taughtModules.length; i++) {
            
            let tempModule = await findModule(taughtMods[i])

            if(tempModule.tutorsTeaching.includes(tutor)) {
                tempModule.tutorsTeaching.pull(tutor);
                let tempNum = tempModule.numOfTutors
                tempNum--
                tempModule.numOfTutors = tempNum
                tempModule.save()
            }
        }
        next();
    } catch (err) {
        res.status(400).json({message: "Error in removing modules"})
    }
}
    





