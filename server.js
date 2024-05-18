const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

console.log(__dirname);

app.use(express.static('static'));

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://aman:EYxksWx870EmDmAt@cluster0.jjmkg.mongodb.net/messages",{useNewUrlParser:true},{useUnifiedTopology:true})

const notesSchema = 
{
    email: String,
    name: String,
    amount: String,
    subject: String,
}

const Note =mongoose.model("Note",notesSchema);
    app.get("/",function(req,res) {
    res.sendFile(__dirname+"/index.html");
});

app.get('/',function (req,res){
    res.sendFile('/index.html',{root:__dirname});
});

app.get('/about.html',function (req,res){
    res.sendFile('about.html',{root:__dirname});
});

app.get('/contact.html',function (req,res){
    res.sendFile('/contact.html',{root:__dirname});
});

app.get('/causes.html',function (req,res){
    res.sendFile('/causes.html',{root:__dirname});
});

app.get('/event.html',function (req,res){
    res.sendFile('/event.html',{root:__dirname});
});

app.get('/blog.html',function (req,res){
    res.sendFile('/blog.html',{root:__dirname});
});

app.get('/donate.html',function (req,res){
    res.sendFile('/donate.html',{root:__dirname});  
});

app.get('/volunteer.html',function (req,res){
    res.sendFile('/volunteer.html',{root:__dirname});
});

app.get('/index.html',function (req,res){
    res.sendFile('/index.html',{root:__dirname});
});

app.get('/terms.html',function (req,res){
    res.sendFile('/terms.html',{root:__dirname});
});

app.get('/privacy.html',function (req,res){
    res.sendFile('/privacy.html',{root:__dirname});
});

app.post("/",function(req,res) {
    let newNote = new Note({
        email: req.body.email,
        name: req.body.name,
        amount: req.body.amount,
        subject: req.body.subject
    });
    newNote.save();
    res.redirect('/');
})

app.listen(4000,function(){
    console.log("server is listening on port 4000");
})