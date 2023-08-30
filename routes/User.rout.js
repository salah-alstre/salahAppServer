const express = require("express");
const { Login, Register, setFav, getFav, getHistory, addHistory } = require("../Controller/UserController");
const UserRouter = express.Router();

UserRouter.get("/Login",Login)
UserRouter.post("/Register",Register)
// UserRouter.patch("/setFav",setFav)
// UserRouter.get("/getFav",getFav)
// UserRouter.get("/getHistory",getHistory)
// UserRouter.post("/addHistory",addHistory)


module.exports = UserRouter;