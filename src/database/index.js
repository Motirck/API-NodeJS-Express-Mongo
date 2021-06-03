// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });
// mongoose.Promise = global.Promise;

// module.exports = mongoose;


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/noderest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

module.exports = mongoose;