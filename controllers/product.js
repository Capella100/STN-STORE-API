const Product = require('../models/products');

const getAllProducts = async (req, res, next) => {
    try {
        const { page, limit } = req.query;

        const products = await Product.find({})
            .limit(limit)
            .skip((page - 1) * limit)
            .select('name price featured')
        const count = await Product.countDocuments();
        res.status(200).json({
            data: products,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getAllProductsStatic = async (req, res, next) => {
    try {
        console.log(req.query)
        const products = await Product.find(req.query)
            .sort('price')
            .select('name price featured')
        res.status(200).json({ data: products })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}