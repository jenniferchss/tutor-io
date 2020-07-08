// cloudinary configuration
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dgezkprxy",
    api_key: "282312799715421",
    api_secret: "hIPONv-mFOasbMQJqOjgdL76lsA"
  });

exports.uploads = (file) =>{
  return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) => {
      resolve({url: result.url, id: result.public_id})  //result.url is the url that will be returned for accessing the image.
      }, {resource_type: "auto"})
    })
}