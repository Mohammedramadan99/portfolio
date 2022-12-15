// * arr -> objs -> info(name,rating,img,...,....)
const mongoose = require("mongoose");

const ProjectsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  images: [
    {
      public_id: String,
      url: String,
    },
  ],
  techs: {
    type: Array,
  },
  desc: {
    type: String,
  },
  category: {
    type: String,
  },

  details: [
    {
      head: {
        type: String,
      },
      paragraph: {
        type: String,
      },
      items: {
        type: Array,
      },
    },
  ],
  githubLink: {
    type: String,
  },
  websiteLink: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectsSchema);
export default Project;