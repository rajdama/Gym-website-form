const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
const port = 80

//EXPRESS RELATED STUFF
app.use('/static', express.static('static'))//Serving the static files
app.use(express.urlencoded())

//PUG RELATED STUFF
app.set('view engine', 'pug')// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))//Set the view/template directory (we could also do this without path module)

//ENDPOINTS

app.post('/', (req, res) => {
    name = req.body.name
    age = req.body.age
    address = req.body.address
    gender = req.body.gender
    More = req.body.More
    let outputTowrite = `The name of client is ${name},${age} years old, ${gender},residing at ${address}, More about him/her : ${More}`
    fs.writeFileSync('output.txt',outputTowrite)
    const params = {'title':'Best Gym'}
    res.status(200).render('index',params)
})
app.get('/', (req, res) => {
  

    const params = {'title':'Best Gym'}
    res.status(200).render('index',params)
})



//START THE SERVER
app.listen(port, () => {
    console.log(`The application is started successfully on port ${port}`)
})