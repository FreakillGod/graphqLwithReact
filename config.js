const mongoose = require("mongoose");

const Db = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log('conn', )
  console.log("connected to tthe data bade");
};

module.exports = Db;
