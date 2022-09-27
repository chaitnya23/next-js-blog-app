
import mongoose from 'mongoose';

const dbConnect = async()=>{

    
    mongoose.connect(`mongodb+srv://chaitnya_giri:chaitnya2306@mycluster.osnnc.mongodb.net/blog_app?retryWrites=true&w=majority`)
    .then(() => console.log("Database succesfully connected with server..."))
    .catch((err) => console.log(err));
}

export default dbConnect;