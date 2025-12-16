const mongoose = require('mongoose');
const connect = async () => {
  await mongoose.connect(
    'mongodb+srv://Sanjubarsiwal:Sanjubarsiwal@devtinder.adivrcc.mongodb.net/?appName=DevTinder',
  );
};

module.exports = { connect };
