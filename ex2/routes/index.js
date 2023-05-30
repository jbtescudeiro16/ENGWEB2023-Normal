var express = require('express');
var router = express.Router();



var Plantas = require('../controllers/plantas')

router.get('/plantas', function(req, res) {
  Plantas.list()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, message: "Erro na mensagem das plantas: "}))
});

router.get('/plantas/:id', function(req, res) {
  Plantas.getPlantaById(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, message: "Erro na mensagem da planta com id: "+req.params.id}))
});

router.get('/plantas/especies', function(req, res) {
  Plantas.especies()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, message: "Erro na mensagem dos especies: "}))
});



router.get('/plantas/freguesias', function(req, res) {
  Plantas.freguesias()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, message: "Erro na mensagem dos Freguesias: "}))
});




router.post('/plantas', (req,res) => {
  Plantas.add(req.body)
  .then(dados => res.status(200).json(dados))
  .catch(erro => res.status(521).json({erro: erro, message: "Erro na mensagem add planta: "}))
})

router.get('/plantas/:id', (req,res)=>{
  Plantas.delete(req.params.id)
  .then(dados => res.status(200).json(dados))
  .catch(erro => res.status(521).json({erro: erro, message: "Erro na mensagem delete planta: "}))
})

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Plantas.list()
    .then(dados => {
      // console.log(dados)
      res.render('index', { slist: dados, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de plantas"})
    })
});

router.get('/:id', function(req, res) {
  var data = new Date().toISOString().substring(0, 16)
  Plantas.getPlantaById(req.params.id)
  .then(dados => {
    console.log(dados)
    res.render('plant', { a: dados, d: data })
  })
  .catch(erro => {
    res.render('error', {error: erro, message: "Erro na obtenção da planta com id"+  req.params.id})
  })
});

router.get('/especie/:id', function(req, res) {
  var data = new Date().toISOString().substring(0, 16)
  Plantas.getPlantaById(req.params.id)
  .then(dados => {
    console.log(dados)
    res.render('especie', { a: dados, d: data })
  })
  .catch(erro => {
    res.render('error', {error: erro, message: "Erro na obtenção da planta com id"+  req.params.id})
  })
});

module.exports = router;
