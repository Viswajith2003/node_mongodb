const { log } = require("console");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
let port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const path = require("path");
const Chat = require("./models/chat");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

main()
  .then((res) => console.log("Success"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
}

app.listen(port, () => console.log("listening to port 3000.."));

//index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("view.ejs", { chats });
});
