import express from "express";

const app = express();
const rest = [
    {    Name : "KFC",
    Fav : "crispy chicken"
},

{
    Name : "A2B",
    Fav: "sweets"
}
];
app.get("/home",(req,res)=>{
    res.send(rest);
});

app.listen(9000, ()=>{console.log("port started at 9000")});