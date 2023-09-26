console.log("connectData.js co vao daykhong")

import mongoose from 'mongoose'


const dbURL = 'mongodb+srv://baphongpine:Ngohongthong-1832004@cluster0.uuvsqu7.mongodb.net/'


mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = mongoose.connection

// db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB Atlas")
})
