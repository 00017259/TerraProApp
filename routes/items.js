let fs = require('fs')
let express = require('express')
let router = express.Router()
const { v1 } = require('uuid')

router.get('/', (req, res) => {
    res.render('items', {
        items: getAll('items')
    })
})

router.get('/item/:id', (req, res) => {
    let id = req.params.id
    let items = getAll('items')
    let item = items.find(item => item._id == id)
    
    res.render('single-item', {
        item: item 
    })
})

router.route('/new')
    .get((req, res) => {
        res.render('new-item')
    })
    .post((req, res) => {
        let newItem = {
            _id: v1(),
            title: req.body.title,
            price: req.body.price,
            color: req.body.color,
            discount: req.body.discount,
            size: req.body.size,
            image: req.body.image
        }
        const items = getAll('items')
        items.push(newItem)
        saveAll('items', items)
        res.redirect('/items')
    })

router.route('/update/:id')
    .get((req, res) => {
        let id = req.params.id
        let items = getAll('items')
        let item = items.find(item => item._id == id)
        
        res.render('update-item', {
            updateItem: item 
        })
    })
    .put((req, res) => {
        let id = req.params.id

        let items = getAll('items')

        let item = items.find(item => item._id == id)

        let idx = items.indexOf(item)

        items[idx].title = req.body.title
        items[idx].price = req.body.price
        items[idx].color = req.body.color
        items[idx].discount = req.body.discount
        items[idx].size = req.body.size
        items[idx].price = req.body.price

        saveAll('items', items)
        res.json({"success": true})
})

router.delete('/delete/:id', (req, res) => {
    let id = req.params.id
    let items = getAll('items')

    let filtereditems = items.filter(item => item._id != id)

    saveAll('items', filtereditems)
    res.json({"success": true})
})


module.exports = router


function  getAll(collection) {
    return JSON.parse(fs.readFileSync(`./data/${collection}.json`))
}

function saveAll(collection, data) {
    fs.writeFileSync(`./data/${collection}.json`, JSON.stringify(data))
}
