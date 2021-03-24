const express = require('express');
const router = express.Router();
const sliderController = require('./slider.controller');

router.route('/')
    .get(sliderController.getSliderList)
    .post(sliderController.createSlider)

router.route('/:id')
    .get(sliderController.getSupplierByID)
    .put(sliderController.updateSlider)
    .delete(sliderController.deleteSlider)



module.exports = router;