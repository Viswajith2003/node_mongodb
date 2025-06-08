const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main()
  .then((res) => console.log("Success"))
  .catch((err) => console.log(err));

//create a schema as the constraint rule
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("user", userSchema); // create a model like class

//UpdateOne operation

//Find operations
// User.find({ age: { $gt: 22 } })
//   .then((res) => console.log(res[0]))
//   .catch((err) => console.log(err));

//Insert many Operation
// User.insertMany([
//   { name: "viswa", email: "viswa@gmail.com", age: 22 },
//   { name: "jera", email: "jera@gmail.com", age: 23 },
//   { name: "sabari", email: "sabari@gmail.com", age: 21 },
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//Insert single data
// const User1 = new User({            //document collection
//   name: "viswa",
//   email: "viswa@gmail.com",
//   age: 22,
// });

// User1.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
