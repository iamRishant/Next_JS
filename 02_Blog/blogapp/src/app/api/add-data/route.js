import connectToDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";


const check=Joi.object({
    title:Joi.string().min(5).max(100).required(),
    description:Joi.string().min(10).max(1000).required()
})






// this is an api route so it should have an method in this case we have post method
export async function POST(req){
    try {
        // first connect to database
        await connectToDB();
        // then get the message
        const extractBlogData=await req.json();
        // now we will validate the data
        const {title,description}=extractBlogData;

        const {error}=check.validate({title,description});

        if(error){
            return NextResponse.json({
                success:false,
                message:error.details[0].message
            })
        }
        
        // if there is no error then we will save it into database
        //we will add it into our model in this case model is Blog
        const addNewBlog= await Blog.create(extractBlogData);
        
        if(addNewBlog){
            return NextResponse.json({
                success:true,
                message:"Blog added successfully",
                blog:addNewBlog
            })
        }
        else{
            return NextResponse.json({
                success:false,
                message:"Something went wrong"
            })
        } 
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false,
            message:"Something went wrong"
        })
        
    }
}