const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("static"))
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/static/index.html')
})

// Route to Login Page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html')
})

/*app.post('/auth', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username
    let password = req.body.password
    res.send(`Username: ${username} Password: ${password}`)
  })*/

const routeLogin = require("./routes/post_login")
app.use("/post_login", routeLogin)

const configUser = require("./routes/map/config")
app.use("/config",configUser)

  const port = 3000

app.listen(port, () => console.log(`Server is running on port ${port}`))