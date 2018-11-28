var express = require('express');

//CREO IL ROUTER
var router = express.Router();

const utenti = require ('../utenti.js').utenti

//do il permesso
router.use ('/', function (req,res,next) {
    if (req.headers.authorization === "admin") {
      next ();  
    }
    else res.json("cagati")
})

// PAGINA PRINCIPALE UTENTI   
router.get('/', function (req, res) {
    res.send('Lista degli utenti');
});

// DETTAGLIO DI UN UTENTE
router.get('/:id', function (req, res) {
    res.send('Detaglio dell utente con id :' + req.params.id);
});

router.get('/: nome', function (req, res) {
    var nome = req.params.nome;
    var utente = utenti.find(function (el) {
        el.nome === nome;
    });
    res.json(utente)
});

router.get('/users', function (req, res) {
    res.json(utenti);
});

router.get('/users/:nome', function (req, res) {
    var nome = req.params.nome;
    var utente = utenti.find(function (el) {
        el.nome === nome;
    });
    res.json(utente)
});

router.post('/users', function (req, res) {
    var nome = req.params.nome;
    var utente = utenti.find(function (el) {
        el.nome === nome;
    });
    res.json(utente)
});

router.post('/users', function (req, res) {

    var sesso = req.query.sesso;
    if (sesso == undefined) {
        res.json(utenti)
    }
    else if (sesso == 'female') {
        var femmine = utenti.filter(function (utente) {
            return utente.nome.endsWith('a')
        })
        res.json(femmine)
    }
    else if (sesso == 'male') {
        var maschi = utenti.filter(function (utente) {
            return utente.nome.endsWith('a')
        })
        res.json(maschi)
    }


});



router.post('/', function (req, res) {

    var body = req.body;
    // (me lo parsa nell'index.js grazie a bodyParse.json)
    var arrayid = [];
    // for (let i = 0; i <utenti.length; i++){
    //     arrayid.push (utenti[i].id)
    // }
    // (altro modo)
    utenti.forEach(function (utente){
    arrayid.push(utente.id)
    })

    Math.max (...arrayid)

    body.id = max + 1
    utenti.push(body)
    res.json(nuovoutente);
    // giusto per vedere se funziona
});

router.delete ('/:id', function (req, res) {
    var id = req.params.id
    var indice = utenti.findIndex (function (utente) {
        utente.id == id
    })
    utenti.splice(indice,1);
    res.json(utenti)
})

router.delete('/', function (req, res) {
    var body = req.body
    var indice = utenti.findIndex(function (utente) {
        utente.id == id
    })
    utenti.splice(indice, 1, body);
    res.json(utenti)
})



module.exports = router;