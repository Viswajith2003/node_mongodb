const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxLength: 50,
  },
  created_at: Date,
});

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;
 