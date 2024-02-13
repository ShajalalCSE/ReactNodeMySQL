import  Express  from "express";
import   Cors  from 'cors';
import Mysql from 'mysql2';

const app = Express();

app.use(Cors());

const db = Mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'renomy',
    port: 3307
})
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get('/',(req,res)=>{
    return res.json("From backend side");

})

app.get('/user',(req,res)=>{
    const sql = "select * from users";
    db.query(sql,(err, data)=>{
        if(err)return res.json(err);
        return res.json(data);

    })


})
app.listen(8081,()=>{
    console.log("listening");

})