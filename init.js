const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => console.log("Success"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
}

Chat.insertMany([
    {
        from:"viswa",
        to:"Jithu",
        msg:"Hello,How are you ?",
        created_at:new Date()
    },
    {
        from:"manu",
        to:"anu",
        msg:"Send notes please",
        created_at:new Date()
    },
    {
        from:"amal",
        to:"kiran",
        msg:"Lets meet up",
        created_at:new Date()
    },
])