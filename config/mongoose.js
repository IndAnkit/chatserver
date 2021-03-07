const mongo = require("mongoose");
const baseURL = "mongodb://localhost:27017/mydb";
mongo
  .connect(process.env.MONGODB_URI || baseURL, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then((db) => {
    console.log("Connected MONGODB");
  })
  .catch((error) => console.log("Not Connected"));
