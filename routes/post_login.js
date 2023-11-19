const express = require("express")
const route = express.Router()
route.use(express.urlencoded({extended: true}))
route.use(express.static("static"))
/*route.post("/", (req,res) => {
    
})*/
route.get("/", (req,res) => {
    res.send("Works")
})

route.post("/send", (req,res) => { //login function


    const credentials = {
        username: req.body.username,
        password: req.body.password
    }
    const credentialsJSON = JSON.stringify(credentials)
    console.log(credentialsJSON)

    const parseData = JSON.parse(credentialsJSON)
    console.log(parseData.username) //parse function returns the parameter (in this case the username parameter)
    
    const fs = require('fs') // create and require fs variable
    let path = __dirname + '/json files/' + credentials.username + '.json' // data.json file path variable

    //const fe = require('fe')
    /*let file_path = './' + credentials.username + '.json'
    console.log(file_path)

    fs.writeFileSync(path , credentialsJSON)*/




    

    //const parseData1 = JSON.parse(aux) // parses aux from string to get parameters values (ex: name, password,etc.)

    try{
        let file_path = './routes/json files/' + credentials.username + '.json'
        console.log(file_path)

        if(!fs.existsSync(file_path)){ //&& credentialsJSON!=null)|| 
            
            fs.writeFileSync(path , credentialsJSON)
            //res.sendFile(__dirname + '/map/map_api.html') 
            res.redirect("/config")
        }//write to file
        else if(fs.existsSync(file_path))
        {
            const dataBuffer = fs.readFileSync(__dirname + '/json files/' + credentials.username + '.json') //reads from JSON file
            console.log("Actual data: ")
            console.log(dataBuffer.toString())
            /*let test = dataBuffer.toString()
            newtest = test.replace("\"1234\"}", "")
            console.log(newtest)*/
            const aux = dataBuffer.toString() // reads from file and puts it into a constant
            if(aux==credentialsJSON)
            {
                //res.sendFile(__dirname + '/map/map_api.html')
                res.redirect("/config")
            }
            else if(aux!=credentialsJSON){res.redirect('back') //or res.redirect(req.get('referer'))

        }
            //console.log(aux)
            //console.log(credentialsJSON)
            /*else{ console.log("Error")
            //alert("Incorrect username or password")
            res.jsonp("Incorrect username or password")
        }*/
        }
        /*else{
            res.sendFile(__dirname + '/error.html')
            req.body.username = ""
            req.body.password = ""
            console.log("Wrong username/password or NULL")
        }*/
    }
    catch(err)
    {
        console.log(err)
        //res.sendFile(__dirname + '/error.html')
    }
    
    //let username = req.body.username
    //let password = req.body.password
    //res.send(`Username: ${username} <br> Password: ${password}`)
})


module.exports = route