const router = require('express').Router()
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
      if (err && err.name == 'ValidationError') {
          let message = 'Validation Error'
          for (var field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `
            message += `${err.errors[field].message}`
        }
          res.render('/places/new', { message })
      }
      else {
          res.render('error404')
      }
  })
})




router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
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
