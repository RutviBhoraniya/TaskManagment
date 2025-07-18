const express = require("express")
const path = require("path")
const fs = require("fs")
const users = require("./users.json") 

PORT = 3001

const app = express()
app.use(express.static(path.join(__dirname,"/frontend/")))
app.use(express.urlencoded({ extended: true }));

const signupPage = path.join(__dirname,"/frontend/signup.html")
const loginPage = path.join(__dirname,"/frontend/login.html")
const dashboardpage = path.join(__dirname,"/frontend/dashboard.html")
const contactPage = path.join(__dirname,"/frontend/contact.html")
const aboutusPage = path.join(__dirname,"/frontend/aboutus.html")
const addnewTaskPage = path.join(__dirname,"/frontend/addnewTask.html")

app.get("/",(req,res)=>{
    res.sendFile(dashboardpage)
})

app.get("/contact",(req,res)=>{
    res.sendFile(contactPage)
})

app.get("/aboutus",(req,res)=>{
    res.sendFile(aboutusPage)
})

app.get("/addnewTask",(req,res)=>{
    res.sendFile(addnewTaskPage)
})

app.get("/signup",(req,res)=>{
    res.sendFile(signupPage)
})

app.get("/login",(req,res)=>{
    res.sendFile(loginPage)
})

app.post("/signup",(req,res)=>{
    const userData = req.body;
    console.log(userData)
    users.push(userData)
    fs.writeFile("users.json",JSON.stringify(users),(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
    res.redirect("/login")
})

app.post("/login",(req,res)=>{
    const userData = req.body;
    console.log(userData)
    for(user of users){
        if(user.email==userData.email && user.password==userData.password)
            res.redirect("/")
    }
    res.sendFile(loginPage)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})