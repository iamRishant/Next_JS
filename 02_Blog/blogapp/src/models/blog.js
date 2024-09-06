import mongoose, { mongo } from "mongoose";

const blogSchema= new mongoose.Schema({
    title:String,
    description:String
});

const Blog =mongoose.models.Blog || mongoose.model('Blog',blogSchema);
// models par sara schema hoga to agar pehle se created hai to new nhi bnaega par nhi bna hua hai to bna dega

export default Blog;
