const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, ""],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    Image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

//creating model from schema
const Product=mongoose.model("Product",productSchema);
module.exports=Product;