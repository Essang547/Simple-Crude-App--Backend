const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/products.model.js')
const productRoute=require('./routes/product.routes.js')
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API Server")
});
;


mongoose.connect('mongodb+srv://essangedet1_db_user:NK0L2zSQDkp20fQ8@backenddb.ngezixm.mongodb.net/Node-API?appName=BackendDB')
.then(() => {
    console.log("connected to database!");
    
})
.catch(()=>{
    console.log("connection failed");
})


// update  a product


// delete  Product


app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
