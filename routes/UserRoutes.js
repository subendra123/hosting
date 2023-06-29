const express = require('express');
const router = express.Router();
const { signup, GetAllUser } = require('../controllers/userControllers');


router.route("/register").post(signup);

router.route("/all").get(GetAllUser);





module.exports = router;