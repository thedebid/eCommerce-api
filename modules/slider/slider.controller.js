const sliderService = require('./slider.service');

// controller for saving slider data
async function createSlider(req,res,next){
    sliderService.save(req.body)
    .then(result => res.status(200).json({result,message:"Slider Created successfully"}))
    .catch(err => next(err))
}

// controller for getting all  slider data
function getSliderList(req, res, next){
    sliderService.getAll()
    .then((result) => {
        if(!result.length){
            return next({
                message : 'Slider not found!',
                status : '400'
            })
        }
        res.status(200).json(result);
    })
    .catch(err => next(err))
}

// controller for getting a slider data by id
function getSliderByID(req,res,next){
    sliderService.findById(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => next(err))
}

// controller for updating slider data 
function updateSlider(req, res, next){
    sliderService.update(req.params.id, req.body)
    .then(result => res.status(200).json(result))
    .catch(err => next(err));
}

// controller for deleting slider data
function deleteSlider(req , res, next){
    sliderService.remove(req.params.id)
    .then(() => 
    res.status(200).json({
        message : "Slider deteted successfully!"
    }))
    .catch(err => next(err))
}

module.exports = {
    createSlider,
    getSliderByID,
    getSliderList,
    updateSlider,
    deleteSlider
}