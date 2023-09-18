import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let sum = 3-5; 

app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    console.log(sum);
    res.render('index.ejs', {
        total: sum
    });
}); 


app.listen(port, () => {
    console.log(`I be listenin to port ${port}`)
});