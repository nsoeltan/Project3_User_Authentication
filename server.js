const mongoose = require("mongoose");


mongoose.Promise = global.Promise;

// This file empties the Notes collection and inserts the notes below

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/releasenotes",
//   {
//     useMongoClient: true
//   }
// );


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_r255d8xp:mvf82f8e93ugq3ml364oj1kmnq@ds051524.mlab.com:51524/heroku_r255d8xp",
  {
    useMongoClient: true
  }
);