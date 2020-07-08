// cloudinary configuration
const cloudinary = require("cloudinary").v2;

const cloud = cloudinary.config({
    cloud_name: "dunksyqjj",
    api_key: "173989938887513",
    api_secret: "ZPLqvCzRu55MaM1rt-wxJCmkxqU"
  });

module.exports = cloud;