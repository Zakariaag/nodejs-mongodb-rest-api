const Product = require("../models/Product");

const getProducts = async()=>{
    return await Product.find({});
}

const getProductById = async(id)=>{
    return await Product.findOne({_id:id});
}

const deleteProductById = async(id)=>{
    return await Product.findByIdAndDelete({_id:id});
}
