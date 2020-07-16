// Cloudinary Configuration
const cloudinary = require("cloudinary").v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_NAME,
    api_secret: process.env.CLOUDINARY_NAME
});

// exports.uploads = (file) =>{
//   return new Promise(resolve => {
//     cloudinary.uploader.upload(file, (result) => {
//       resolve({url: result.url, id: result.public_id})  //result.url is the url that will be returned for accessing the image.
//       }, {resource_type: "auto"})
//     })
// }

module.exports = { cloudinary };