const express = require("express");
const ErrorHandler = require("../../utils/errorHandler.js")
const router = express.Router();
const axios = require("axios");
const catchAsyncErrors = require("../../middleware/catchAsyncErrors.js");
const User = require('../../models/userModel.js');

const newUser = new User({
  email: 'test@example.com',
  password: 'hashedpassword', // Debes encriptarla antes de guardar
});

//routes -> /user/
router.get( 
    "/get-user",
    catchAsyncErrors(async (req, res, next) => {
      try {
        await newUser.save();
        console.log('Usuario guardado:', newUser);
        res.status(201).json({
            success: true,
            data: "success",
          });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500, "error on /user/get-user" ));
      }
    })
  );

// //routes -> /user/
// router.post( 
//   "/post-user-information",
//   catchAsyncErrors(async (req, res, next) => {
//     try {
//       res.status(201).json({
//           success: true,
//           data: "success",
//         });
//     } catch (error) {
//       return next(new ErrorHandler(error.message, 500, "error on /user/get-user" ));
//     }
//   })
// );




module.exports = router;