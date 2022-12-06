import express from "express"
import { productManager } from './manager/index.js'

const app = express()

const port = 8080;

app.get("/api/products", async (req , res) =>{

    const { limit }= req.query

    const allProducts = await productManager.getProduct();

    if(!limit || limit < 1 ) {

        res.send({success: true, products: allProducts});

    }

    
});

app.listen(port, () => console.log(`Server Running port on ${port}`))