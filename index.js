const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main().then(() =>{
    console.log("connection successful");
})
    .catch((err) => {
        console.log(err);
    })

const userSchema = new mongoose.Schema( {
    name: String,
    email: String,
    age: Number
})

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete('69c254d5f25af4b703fa29d9', {new: true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

// User.findByIdAndUpdate('69c254d5f25af4b703fa29da', { age: 45}, { new: true })
//     .then((res) => {
//         console.log(res);
// })
//     .catch((err) => {
//         console.log(err);
//     })

// User.findById("69c254d5f25af4b703fa29da")
//     .then((res) => {
//     console.log(res);
// })
//     .catch((err) => {
//         console.log(err);
// })

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
//     {name: "Bruce", email: "bruce@gmail.com", age: 47}
// ]).then((res) => {
//     console.log(res);
// })

// const user2 = new User({
//     name: "eve",
//     email: "eve@yahoo.in",
//     age: 48
// })

// user2.save().then((res) => {
//     console.log(res);
// })
//     .catch((err) => {
//         console.log(err);
//     })
