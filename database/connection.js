
import mongoose from 'mongoose';

const dbConnect = async()=>{

    
    mongoose.connect(`mongodb://localhost/blog_site_db`)
    .then(() => console.log("Database succesfully connected with server..."))
    .catch((err) => console.log(err));
}

export default dbConnect;