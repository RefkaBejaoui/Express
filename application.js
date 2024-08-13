const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('./public'));

const WorkingHours = (req,res,next)=>{
   
    const ToDay = new Date()
    const day = ToDay.getDay();
    const hour = ToDay.getHours();
    if (day>=1 && day<=5 && hour>=9 && hour<17){
        next();
    } 
    else {
    res.send('SORRY The web application is only available during working hours (Monday to Friday,  from 9 to 17)');}
  
}

app.use(WorkingHours);

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/services',(req,res)=>{
    res.render('services')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.listen(port,()=>{
console.log(`server is running on http://localhost:${port}`)
})