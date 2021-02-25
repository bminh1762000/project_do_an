const Product = require("../models/product");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    if (!products) {
      const error = new Error("Could not find products");
      error.status = 404;
      throw error;
    }
    res.status(200).json({ message: "Fetched", products: products });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};

// exports.getProducts = async (req, res, next) => {
//   try {
//     for (const product of products_data) {
//       const newPro = new Product({
//         title: product.title,
//         imageUrl: product.imageUrl,
//         price: product.price,
//         category: product.category,
//         ship: product.ship,
//       });

//       const newProduct = await newPro.save();
//     }
//     res.status(201).json({ message: "Created." });
//   } catch (err) {
//     if (!err.status) {
//       err.status = 500;
//     }
//     next(err);
//   }
// };
