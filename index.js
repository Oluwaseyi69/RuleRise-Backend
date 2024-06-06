require('dotenv').config();


const express = require('express');
const app = express()
const connectDB = require('./config/Db');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/UserRoutes');
const productRoutes = require('./routes/ProductsRoutes');



const PORT = process.env.PORT;





app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);

// Connect Database
connectDB();


app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
});

