// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from "../../../database/models/blogModel";
import dbConnect from "../../../database/connection";


dbConnect();

export default async function handler(req, res) {

  const {
    author_name,
    bio,
    profileImgUrl,
    title,
    category,
    content,
    blogImgUrl,
  } = req.body;

  
  try {
    const newBlog = new Blog({
     author_name,
    bio,
    profileImgUrl,
    title,
    category,
    content,
    blogImgUrl,
    });

    await newBlog.save();
    res.status(200).send(newBlog);
  } catch (error) {
    res.status(400).send("error in uploading.....");
  }
}
