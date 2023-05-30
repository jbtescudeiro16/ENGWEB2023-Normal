var Plantas = require("../models/plantas")


module.exports.list = () => {
    return Plantas
        .find()
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}


module.exports.dois = (especieParam,implantParam) => {
    if (especieParam === undefined && implantParam === undefined) {
        return Lista
        .find({})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
      }else if (especieParam === undefined){
        return Lista
        .find({Implantação:implantParam})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
      }else if (implantParam === undefined) {
        return Lista
        .find({Espécie:especieParam},)
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
    }
}

module.exports.getPlantaById = id => {
    return Plantas.findOne({_id:id},{})
        .then(plantas => {
            return plantas
        })
        .catch(erro => {
            return erro
        })
}
module.exports.especies = () => {
    return Plantas.find({},'Especie -_id')
        .then(resposta => {
            arr = []
            resposta.forEach(element => {
                arr.push(element['Especie'])
            });
            return arr
        })
        .catch(erro => {
            return erro
        })
}

module.exports.freguesia = () => {
    return Plantas.find({})
        .then(resposta => {
            arr = []
            resposta.forEach(element => {
                console.log(element['Freguesia'])
                arr.push(element['Freguesia'])
            });
            return arr
        })
        .catch(erro => {
            return erro
        })
}

module.exports.add = p => {
    return Plantas.create(p)
        .then(planta => {
            return planta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.delete = id => {
    return Plantas.deleteOne({_id:id})
        .then(plantas => {
            return plantas
        })
        .catch(erro => {
            return erro
        })
}