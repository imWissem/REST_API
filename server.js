const mongoose=require("mongoose")
const express= require('express')
const user=require('./models/user')
const app=express()
const Port= 3000

app.use(express.json()) 

mongoose.connect('mongodb://localhost:27017/users')
.then(()=>console.log('connected'))
.catch(error => console.log(error)) 

// (GET):http://localhost:3000/all
app.get('/all',(req,res)=>{
    user.find()
    .then(users=>res.send(users))
    .catch((err=>console.log(err)))
})

// (POST):http://localhost:3000/add
app.post('/add',(req,res)=>{
    const {name, phone, email }=req.body
    const newUser= new user({
      name,
      phone,
      email
    })
    newUser.save()
    .then(users=>res.send(users))
    .catch((err=>console.log(err))) 
  })

  // (PUT):http://localhost:3000/edit/:_id
  app.put('/edit/:_id',(req,res)=>{
    const {_id}=req.params._id
    const {name,phone, email }=req.body
    user.findByIdAndUpdate (_id,{$set:{
    name,
    phone,
    email}
   })
    .then(users=>res.send(users))
    .catch((err=>console.log(err)))
  })
 
  // (DELETE) :http://localhost:3000/delete/:_id
  app.delete('/delete/:_id',(req,res)=>{
    const {_id}=req.params._id
    user.findByIdAndRemove (_id)
    .then(users=>res.send(users))
    .catch((err=>console.log(err)))
  })

app.listen(Port, ()=>{ console.log(`localhos : ${Port}`)})