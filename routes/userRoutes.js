const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const driverController = require('./../controllers/driverController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgetPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect);

router.patch('/updatePassword', authController.updatePassword);

router.get('/me', userController.getMe, userController.getUser);

router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);

router.delete('/deleteMe', userController.deleteMe);

router.get(
  '/hireDriver',
  authController.notRestrictTo('user'),
  driverController.getAllDriver
);

router.get(
  '/hireDriver/:id',
  authController.notRestrictTo('user'),
  driverController.getOneDriver
);

// router.use('/hireDriver/:driverId/booking', bookingRouter);

router
  .route('/:id')
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
