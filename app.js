require('dotenv').config();
const express = require('express');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');
const app = express();

//middleware for passing json.
app.use(express.json());

//product routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>')
});
app.use('/api/v1/products', productsRouter);

// errors middleware 
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const PORT = process.env.PORT || 4000;

const start = async () => {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`)
    });
}

start();