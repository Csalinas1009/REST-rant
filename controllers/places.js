const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')


router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('/places/show', {place})
  })
  .catch(err =>{
    res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place =>{
    res.render('/places/show', {place})
  })
  .catch(err =>{
    console.log('delete route error')
    res.render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place =>{
    res.render('/places/edit', {place})
  })
  .catch(err =>{
    console.log('error on edit')
    res.render('error404')
  })
})

// router.post('/:id/rant', (req, res) => {
//   res.('GET /places/:id/rant stub')
// })

// router.delete('/:id/rant/:rantId', (req, res) => {
//     res.('GET /places/:id/rant/:rantId stub')
// })

module.exports = router
