const router = require('express').Router()

router.get('/', (req, res) => {
  let places = [{
    name: "Robin's Place",
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/rest1.avif'
  }, {
    name: "Christian's Borgar Joint",
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/res2.avif'
  }]
  res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})



module.exports = router
