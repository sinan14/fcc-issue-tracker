const mongoose = require("mongoose");
const db = mongoose
.connect(process.env.DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log('DB connection successful!'));

module.exports = db;
