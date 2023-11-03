const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../models/Users");
const mongoose = require ("mongoose");
const jwt= require("jsonwebtoken")
const  registration = require('../controllers/usercontrollers/Registration')
const getbyid= require('../controllers/usercontrollers/GetUserBYId')
const getuser= require('../controllers/usercontrollers/AllUserGetController')
const deletefun = require('../controllers/usercontrollers/DeleteController')
const updateUserById = require('../controllers/usercontrollers/UpdateController')
router.post('/',registration)
router.get('/',getuser)
router.get('/:id',getbyid)

router.delete('/:id',deletefun)
router.put('/:id',updateUserById)
module.exports = router;