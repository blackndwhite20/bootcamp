const express = require('express');
const bootcampController = require('../controllers/bootcamps')
const router = express.Router();


//Gets
router.get('/', bootcampController.getBootcamps);

router.get('/:id', bootcampController.getBootcamp);

//Posts
router.post('/', bootcampController.createBootcamp);

//Puts
router.put('/:id', bootcampController.updateBootcamp);

//Deletes
router.delete('/:id', bootcampController.deleteBootcamp);

module.exports = router;