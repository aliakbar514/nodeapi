const express= require("express");
const postContoler=require("../controler/cpost");


const router=express.Router();

router.get("/",postContoler.getPost);
router.post("/post",postContoler.createPost); 
module.exports=router;
	

