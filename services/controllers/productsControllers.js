const prdService = require("../services/productService");

const getAllProducts=async(req,res)=>{
    try{
        const result = await prdService.getProducts();
        res.status(200).json({result});
    }
    catch(error){
        res.status(500).json({err:error});
    }
}

const getProductById=async(req,res)=>{
    try{
        const result = await prdService.getProductById(req.params.id);
        res.status(200).json({result});
    }
    catch(error){
        res.status(500).json({err:error});
    }
}

const deleteProduct=async(req,res)=>{
    try{
        const result = await prdService.deleteProductById(req.params.id);
        res.status(200).json({result});
    }
    catch(error){
        res.status(500).json({msg:error});
    }
}
