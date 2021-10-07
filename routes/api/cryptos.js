const express = require('express')
const router = express.Router()

const Crypto = require('../../models/Crypto')

// GET api/cryptos/test
router.get('/test', (req, res) => res.send('Crypto route testing!'))

// GET api/cryptos
router.get('/', (req, res) => {
  Crypto.find()
    .then(cryptos => res.json(cryptos))
    .catch(err => res.status(404).json({ nobooksfound: 'No Cryptos found' }))
})

// GET api/cryptos/:id
// Get single crypto by it's id
router.get('/:id', (req, res) => {
  Crypto.findById(req.params.id)
    .then(crypto => res.json(crypto))
    .catch(err => res.status(404).json({ nobookfound: 'No Crypto found' }))
})

// GET api/cryptos
// Add/save crypto
router.post('/', (req, res) => {
  Crypto.create(req.body)
    .then(crypto => res.json({ msg: 'Crypto added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this crypto' }));
})

// GET api/cryptos/:id
// Update crypto
router.put('/:id', (req, res) => {
  Crypto.findByIdAndUpdate(req.params.id, req.body)
    .then(crypto => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    )
})

// GET api/cryptos/:id
// Delete crypto by id
router.delete('/:id', (req, res) => {
  Crypto.findByIdAndRemove(req.params.id, req.body)
    .then(crypto => res.json({ mgs: 'Deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such crypto' }))
})

module.exports = router;