import mongoose from "mongoose";

// * arr -> objs -> info(name,rating,img,...,....)

const OrdersSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    // require: true,
  },
  service: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order =
  mongoose.models.Order || mongoose.model("Order", OrdersSchema);
export default Order;
