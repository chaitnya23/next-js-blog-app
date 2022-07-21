import Blog from "../../../database/models/blogModel";
import dbConnect from "../../../database/connection"

dbConnect();


export default async function handler(req, res) {

    const {_id ,user ,date ,comment} = req.body;

    try {
        const post = await Blog.updateOne({_id} ,{$push:{comments:{user ,date ,comment}}})
     
        res.send("comment uploaded sucessfully");
    } catch (error) {
        res.status(400).send("errror");
    }

}