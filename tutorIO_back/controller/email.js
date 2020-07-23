const emailer = require('../middleware/emailer')
const ejs = require('ejs')
const fs = require('fs')
const { changePassword } = require('./auth')
const emailTemplate = __dirname

exports.verifyUserRegis = async response => {
    console.log("ini response" + JSON.stringify(response, null, 2)) 
    return new Promise((resolve, reject) => {
        
        const file = fs.readFileSync(
            emailTemplate + '/confirmEmail.ejs', 'ascii'
        );

        const user = response.user
        const token = response.token
        // TODO: Create a column in db called "emailverifytoken"
        // Generate a short length secure string ~ 16 chars
        const domain = 'https://tutor-io-c7c0c.web.app'
    
        // /verify?token=acbdabcdabcdabcd&email=abcdef%40gmail.com -> URL (percent) Encode
     
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

exports.sendForgotEmail = async response => {
    console.log("ini response" + JSON.stringify(response, null, 2)) 
    return new Promise((resolve, reject) => {
        // TODO: Create a column in db called "emailverifytoken"
        // Generate a short length secure string ~ 16 chars
        // /verify?token=acbdabcdabcdabcd&email=abcdef%40gmail.com -> URL (percent) Encode

        const file = fs.readFileSync(
            emailTemplate + '/forgotPassword.ejs', 'ascii'
        );

        const user = response.user
        const token = response.token

        console.log("user " + user)
        console.log("token " + token)
        
        const domain = 'https://tutor-io-c7c0c.web.app'
    
        // /verify?token=acbdabcdabcdabcd&email=abcdef%40gmail.com -> URL (percent) Encode
        // const token = response.token;
        var forgotURL = domain + '/updatePassword' + '/' + token
    
        const data = {
            from: 'tutor.io <tutor.io.official@gmail.com>',
            to: user.email,
            subject: 'Reset your password',
            html: ejs.render(file, {user, forgotURL}), 
        }
    
        emailer.sendEmail(data, (err, info, response) => {
            if(err) reject(err);
            else resolve(info,response);
        });
    })  
}