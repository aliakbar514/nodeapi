const express=require("express");
const app=express();
const mongoose=require("mongoose");
const morgan=require("morgan");
const bodyParser=require('body-parser');

//const expressValidator=require("expressValidator");
const dotenv=require("dotenv");
dotenv.config();
 


//db

//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true,useUnifiedToplogy:true}
)
.then(() => console.log('DB Connected'));
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`);
});



//bring in routes
const postRoutes=require("./routes/post");
app.use("/",postRoutes);

//midle ware morgan
app.use(morgan("dev"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//listening 

const port=8080;
app.listen(port, ()=>{
	console.log(` node is listening at the port:${port}`);
});













