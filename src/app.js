//this part will always be required while creating any projects this is reuseable code.
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs")
const port = process.env.PORT || 9000;
const static_path = path.join(__dirname,"../public")
const templates_path = path.join(__dirname,"../templates/views")
const partial_path = path.join(__dirname,"../templates/partials")

app.use(express.json())
app.use(express.static(static_path));
app.use(express.urlencoded({extended:false}))
app.set("view engine", "hbs");
app.set("views",templates_path)
hbs.registerPartials(partial_path)

//this ends here 

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/weather", (req,res)=>{
    res.render("weather")
})

app.get("/about", (req,res)=>{
    res.render("about")
})

app.get("*", (req,res)=>{
    res.render("404error")
})


app.listen(port, () => {
    console.log(`server is listening on ${port} `)
})

// let url = api.openweathermap.org/data/2.5/weather?q={city name}&appid=5a4ef63708a1f7d0ecbb0a363a193969