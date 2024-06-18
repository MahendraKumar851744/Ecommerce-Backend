import productModel from "../models/productModel.js";

// Get
export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    return res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: "Failed",
      message: err.message,
    });
  }
};

export const getProduct = async (req,res) =>{
  try{
    const product = await productModel.findById(req.params.id)
    return res.status(200).json({
      status: "success",
      data: {
        product,
      },
    })

  }catch(err){
    return res.status(404).json({
      status: "Failed",
      message: err.message,
    });
  }
}

// Add product
export const addProduct = async (req, res) => {
  try {
    const { p_id, p_name, p_description, p_cat, p_url, p_cost } = req.body;
    productModel.create({
      p_id,
      p_name,
      p_description,
      p_cat,
      p_url,
      p_cost,
    });
    return res.status(201).json({
      status: "success",
      data: {
        p_id: p_id,
        p_name: p_name,
        p_description: p_description,
        p_cat: p_cat,
        p_url: p_url,
        p_cost: p_cost,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: "Failed",
      message: err.message,
    });
  }
};

// Update
export const updateProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

// Delete
export const deleteProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
