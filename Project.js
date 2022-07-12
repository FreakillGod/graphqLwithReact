const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    length: 10,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Started", "In progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

module.exports = mongoose.model("Project", projectSchema);
