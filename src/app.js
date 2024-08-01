const express = require('express');
const path = require(`path`);
const app = express();
const port = process.env.PORT || 1700
const static_path = path.join(__dirname, "../public");
// const viewsPath = path.join(__dirname, '../public/views');

// const staticPath = path.join(__dirname, '../public');
// console.log('Views Path:', viewsPath); 
// app.set('view engine', 'hbs');

app.set('view engine', 'hbs');
// app.set('views', viewsPath);

// app.set('views', path.join(__dirname, 'views'));

app.use(express.static(static_path));

app.get("", (req,res)=>{
   res.render('index.hbs');

})
app.get("/about", (req,res)=>{
    res.render('about.hbs');
 
 })
 app.get("/weather", (req,res)=>{
    res.render("weather.hbs");
 
 })
 app.get("*", (req,res)=>{
    res.render("error404.hbs");
 
 })
app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
})