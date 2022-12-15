import mongoose from "mongoose";

// * arr -> objs -> info(name,rating,img,...,....)

const ServicesSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  Type: {
    type: String,
    // require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  features: {
    type: Array,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Service =
  mongoose.models.Service || mongoose.model("Service", ServicesSchema);
export default Service;