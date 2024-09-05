const express = require('express')
const port = 8087;
const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

let todoList = []

app.get('/',(req,res)=>{
    return res.render('form',{
        todoList
    });
})

app.post('/insertdata',(req,res)=>{
    todoList.push(req.body);
    return res.redirect('/')
})

app.get('/deleteData/:id',(req,res)=>{
    let {id} = req.params;
    let data = todoList.filter((todo)=>{
        return todo.id != id;
    })
    todoList = data;
    return res.redirect('/')
})


app.listen(port,(err)=>{
    if(err){
        console.log("server not found");
        return false;
    }
    console.log('server is found http://localhost:'+port);
})