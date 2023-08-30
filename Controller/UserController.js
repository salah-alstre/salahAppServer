const { default: mongoose } = require("mongoose");
const mongodb = require("mongodb");
const userModule = require("../modules/user.module");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const songModule = require("../modules/song.module");
const nodemailer = require("nodemailer");
module.exports = {
  Login: async (req, res) => {
    try {
      // Get user input
      const { NumberUser, nameUser,UserInformation } = req.query;

      // Validate user input
      if (!(NumberUser && nameUser && UserInformation)) {
        res.status(407).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await userModule.findOne({ email });

      if (user && (await bcrypt.compare(nameUser, user.nameUser))) {
        // Create token
        const JWT_SECRET =
          "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";
        const token = jwt.sign({ user_id: user._id, email }, JWT_SECRET);

        // save user token
        user.token = token;

        // user
        res.status(200).json({ user: user });
      }
      res.status(403).json({ message: "Invalid Credentials" });
    } catch (err) {
      console.log(err);
    }
  },
  Register: async (req, res) => {
    try {
      // Get user input
      const { NumberUser, nameUser } = req.body;

      // Validate user input
      if (!(NumberUser && nameUser)) {
        res.status(408).json({ message: "All input is required" });
      }
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await userModule.findOne({ NumberUser });

      if (oldUser) {
        return res
          .status(207)
          .json({ message: "User Already Exist. Please Login" });
      }
      //Encrypt user nameUser
      encryptedPassword = await bcrypt.hash(nameUser, 10);

      // Create user in our database
      const user = await userModule.create({
        NumberUser: NumberUser.toLowerCase(), // sanitize: convert NumberUser to lowercase
        nameUser: encryptedPassword,
      });

      const JWT_SECRET =
        "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";
      // Create token
      const token = jwt.sign({ user_id: user._id, NumberUser }, JWT_SECRET);

      // save user token
      user.token = token;
      // return new user
      res.status(200).json({ user: user });
    } catch (err) {
      console.log(err);
    }
  },

  Register: async (req, res) => {
    try {
      // Get user input
      const { NumberUser, nameUser , UserInformation} = req.body;

      // Validate user input
      if (!(UserInformation && nameUser && UserInformation)) {
        res.status(408).json({ message: "All input is required" });
      }
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await userModule.findOne({ UserInformation });

      if (oldUser) {
        return res
          .status(207)
          .json({ message: "User Already Exist. Please Login" });
      }
      //Encrypt user nameUser
      encryptedPassword = await bcrypt.hash(nameUser, 10);

      // Create user in our database
      const user = await userModule.create({
        NumberUser: NumberUser.toLowerCase(), // sanitize: convert NumberUser to lowercase
        nameUser: encryptedPassword,
        UserInformation:UserInformation.user
      });

      const JWT_SECRET =
        "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";
      // Create token
      const token = jwt.sign({ user_id: user._id, UserInformation }, JWT_SECRET);

      // save user token
      user.token = token;
      // return new user
      res.status(200).json({ user: user });
    } catch (err) {
      console.log(err);
    }
  },
  
  }

  
  
