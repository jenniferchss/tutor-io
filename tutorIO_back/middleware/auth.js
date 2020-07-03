const {check} = require("express-validator");
const jwt = require("jsonwebtoken");


function checkTokenExist(token, res) { 
  if (!token) return res.status(400).json({ message: "No token provided" });
    // console.log("Token found")
}

exports.getLoggedInUser = function(req, res, next) {
    const token = req.headers.authorization;
    checkTokenExist(token, res);
    try {
        const decoded = jwt.verify(token, "randomString");
        //console.log("decoded:", JSON.stringify(decoded, null, 2));
        req.user = decoded.user;
        next();
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Invalid Token" });
    }
};

exports.verifyToken = function(req, res) {
    const token = req.headers.authorization;
    checkTokenExist(token, res);
    try {
      const expiry = jwt.decode(token).exp
      const now = new Date();
      if(now.getTime() >= expiry * 1000) {
        //console.log('MASUK FALSE');
        res.json('false');
      } else {
        //console.log('MASUK TRUE +' + token);
        res.json('true');
      }
    } catch(err) {
      // console.log(err);
      res.status(500).json({message: "Invalid token"})
    }   
}

exports.verifyPassword = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  const { oldPassword } = req.body;

  const user = await User.findById(req.user.id);

  const isMatch = await bcrypt.compare(oldPassword, user.password);

  
  if (!isMatch){
    return res.status(400).json({
      message: "Incorrect Password !"
    })
  }

  next();
}

