// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from "../../../database/models/blogModel";
import dbConnect from "../../../database/connection"



dbConnect();

export default async function handler(req, res) {

    const {slug} = req.query;
  try {
    
  
    const blogs = await  Blog.find({category:slug});
 
    res.send(blogs);
    
  } catch (error) {
    res.status(400).send(error.message);
      
  }

}
