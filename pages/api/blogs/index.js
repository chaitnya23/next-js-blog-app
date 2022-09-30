// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from "../../../database/models/blogModel";
import dbConnect from "../../../database/connection"

dbConnect();

export default async function handler(req, res) {

    try {
        const blogs = await Blog.find({});
        res.send(blogs);
    } catch (error) {
        console.log("not able to send blogs");
        res.status(400).send("errror");
    }

}
