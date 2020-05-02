const Post=require("../models/post");

exports.getPost=(req,res)=>{
	res.json({
		posts:[{title:"first post"},{title:"second post"}]
	});
};
exports.createPost=(req,res)=>{
	const post=new Post(req.body);
	console.log("CREATE POST: ", post);

};
