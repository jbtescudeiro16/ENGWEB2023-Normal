
var mongoose = require('mongoose')

var contratoSchema = new mongoose.Schema({
    _id : String,
    Rua : String,
    Local : String,
    Freguesia : String,
    Origem : String,
    Estado : String,
    Caldeira : String,
    Tutor : String,
    Gestor : String,
    Num_Registo: Number,
    NomeCientifico : String,
    DataPlant : String,
    DataAct : String,
    NumInterv : Number,
    Cod_Rua : Number,
    Especie : String,
    Implantacao : String   
})

module.exports = mongoose.model('plantas', contratoSchema)