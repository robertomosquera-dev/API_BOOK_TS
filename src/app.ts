import express from "express";

const app = express();
const PORT: number = 4030;

app.use(express.json());

app.get('/',(req,res,next)=>{
    res.send("Hola mundo");
})

app.set("PORT", PORT);

export default app;