const product = require("../model/productSchema");
const fs = require("fs");
const subCategory = require("../model/subCatSchema");



module.exports.product = async (req,res) =>{
    let  data = await subCategory.find({});
    res.render("addProduct" , {data});
};

module.exports.productData = async (req,res) =>{
    req.body.image = req.file.path;
    await product.create(req.body).then(()=>{
        res.redirect("/product/addProduct");
    });
};

module.exports.viewProduct = async (req,res) =>{
    let data = await product.find({}).populate("productId");
    data && res.render("viewProduct" , {data});
};

module.exports.delete = async (req,res) =>{
    let singleRecord = await product.findById(req.query.id);
    fs.unlinkSync(singleRecord.image);
    let data = await product.findByIdAndDelete(req.query.id)
    data && res.redirect("/product/viewProduct");
};





