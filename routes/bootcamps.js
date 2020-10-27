const express = require('express');
const router = express.Router();
const {getBootcamp,getBootcamps,createBootcamps,updateBootcamp,deleteBootcamp,bootCampPhotoUpload} = require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(createBootcamps);
// /:ID needed
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

router.route('/:id/photo').put(bootCampPhotoUpload);

module.exports = router;