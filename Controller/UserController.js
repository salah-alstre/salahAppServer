const { userModule } = require("../modules/User.modules");

  const Login= async (req, res) => {
    try {
      // Get user input
      const { gmailUser, pasUser  } = req.body;

      // Validate user input
      if (!(gmailUser && pasUser )) {
        res.status(407).send("All input is required");
      }

      // Validate if user exist in our database
      const user = await userModule.findOne({ gmailUser });

      if (user && user.pasUser==pasUser) {
        res.status(200).json({ user: user });
      }
      res.status(403).json({ message: "Invalid Credentials" });
    } catch (err) {
      console.log(err);
    }
  }

  const Register= async (req, res) => {
    try {
      // Get user input
      const { gmailUser, nameUser , pasUser } = req.body;

      // Validate user input
      if (!(gmailUser && nameUser && pasUser )) {
        res.status(408).json({ message: "All input is required" });
      }
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await userModule.findOne({ gmailUser });

      if (oldUser) {
        return res
          .status(207)
          .json({ message: "User Already Exist. Please Login" });
      }

      // Create user in our database
      const user = await userModule.create({
        gmailUser: gmailUser.toLowerCase(), // sanitize: convert gmailUser to lowercase
        pasUser: pasUser,
        nameUser: nameUser
      });
      res.status(200).json({ 
        message:"done",
        user: user 
      });
      res.status(200).json({ ...req.body  });

    } catch (err) {
      console.log(err);
    }
  }

  // module.exports = {Login}
  module.exports={Register,Login}
