const { findByIdAndUpdate } = require('../order/order.model');
const sliderModel = require('./slider.model');

// function to save slider
function save(data){
    const newSlider = new sliderModel({
        image : data.image,
        category : data.category,
        status : data.status

    })
    return newSlider.save();
}

// function for getting all slider details
function getAll(){
    return sliderModel.find({});
}

// function for getting a slider by Id
async function findById(id){
    const slider = await sliderModel.findById(id);
    if(!slider) throw "Slider not found";
    return slider;
    
}

// function for updating slider
async function update(id,data){
    const slider = await findById(id);
    Object.assign(slider,data);

    return slider.save();
}

// function for deleting slider
async function remove (id){
    const slider = await findById(id);
    await slider.remove(id)

}

module.exports = {
    save,
    getAll,
    findById,
    update,
    remove
}

