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


router.get('/plantas', function(req, res) {
  const implant = req.query.implant;
  Plantas.dois(undefined,implant)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, message: "Erro na mensagem das Plantas com implantação: "+implant}))
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
  res.render('index', { title: 'Express' });
});


module.exports = router;
