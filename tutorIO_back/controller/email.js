const emailer = require('../middleware/emailer')
const ejs = require('ejs')
const fs = require('fs')
const emailTemplate = __dirname

exports.verifyUserRegis = async response => {
    console.log("ini response" + JSON.stringify(response, null, 2)) 
    return new Promise((resolve, reject) => {
        
        const file = fs.readFileSync(
            emailTemplate + '/confirmEmail.ejs', 'ascii'
        );

        const user = response.user
        const token = response.token
        const domain = 'http://localhost:3000'
    
        var verifURL = domain + '/verify' + '/' + token
    
        const data = {
            from: 'tutor.io <tutor.io.official@gmail.com>',
            to: user.email,
            subject: 'Confirm your account',
            html: ejs.render(file, {user, verifURL}), 
        }
    
        emailer.sendEmail(data, (err, info, response) => {
            if(err) reject(err);
            else resolve(info,response);
        });
    })  
}