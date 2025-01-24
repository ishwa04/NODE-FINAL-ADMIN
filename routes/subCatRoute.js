const express = require("express");
const route = express.Router();
const ctl = require("../controller/subCatCtl");
const passport = require("passport");
const passportSt = require("../middleware/passport");

route.get("/addSubCat" , ctl.addSubCat); 
route.post("/addSubCat" , ctl.subCat); 
route.get("/viewSubCat" , ctl.viewSubCat); 
route.get("/delete" , ctl.delete); 

module.exports = route; 