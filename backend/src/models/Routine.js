const { Schema, model } = require('mongoose');
const cors = require('cors');

const RoutineSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    urlImage: {type: String, required: true},
    category: [{type: Object, required: true}]
}, {
    timestamps: true
});

RoutineSchema.methods.setImgUrl = function setImgUrl(fileName) {
  console.log(__dirname)
    this.urlImage = 'https://backend-sic-gym-uptc.herokuapp.com' + '/sources/' + fileName    
}

module.exports = model('Routine', RoutineSchema);