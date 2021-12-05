const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users")
const authRoute = require("./routes/author");
const bookRoute = require("./routes/books");
const categoryRoute = require("./routes/category");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, 
{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:false },
()=>{
    console.log("Connect to MongoDB");
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/books", bookRoute);
app.use("/api/category", categoryRoute);

app.listen(5000,()=>{
    console.log("Backend sever is running!");
})