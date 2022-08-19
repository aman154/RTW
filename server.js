const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
console.log(__dirname);
app.use(express.static('static'));
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb+srv://aman:EYxksWx870EmDmAt@cluster0.jjmkg.mongodb.net/contactsDB'),{useNewUrlParser:true},{useUnifiedTopology:true}
const messagesSchema= {
    name:String,
    email:String,
    subject:String,
    message:String
}
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
const Message =mongoose.model('Message',messagesSchema);
app.get('/', function(req, res){
    res.sendFile(__dirname + '/contact.html');
})
app.post('/',function(req, res){
    let newMessage = new Message({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    });
    newMessage.save();
    res.redirect('/');
})
const volunteersSchema= {
    name:String,
    email:String,
    why:String
}
const Volunteer =mongoose.model('Volunteer',volunteersSchema);
app.get('/', function(req, res){
    res.sendFile(__dirname + '/volunteer.html');
})
app.post('/',function(req, res){
    let newVolunteer = new Volunteer({
        name:req.body.vname,
        email:req.body.vemail,
        message:req.body.why
    });
    newVolunteer.save();
    res.redirect('/');
})
app.listen(3000, function(){
    console.log('listening on port 3000');
});
