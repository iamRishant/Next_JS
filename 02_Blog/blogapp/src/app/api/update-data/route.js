import connectToDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const check=Joi.object({
    title:Joi.string().min(5).max(100).required(),
    description:Joi.string().min(10).max(1000).required()
})



export async function PUT(request){
    try {
        await connectToDB();
        // now we will get id form url
        const {searchParams}= new URL(request.url);
        const blogId=searchParams.get('id');
        // if blog id is not there
        if(!blogId){
            return NextResponse.json({
                success:false,
                message:"Blog id is required"
            })
        }
        
        // we will be needing new title and description
        const { title, description }= await request.json();// destructuring
        // we will validate the given title and description
        const {error}=check.validate({title,description});

        if(error){
            return NextResponse.json({
                success:false,
                message:error.details[0].message
            })
        }

        // after this just update it
        const updateBlog = await Blog.findByIdAndUpdate({
            _id:blogId
        },{title,description},{new:true});

        if(updateBlog){
            return NextResponse.json({
                success:true,
                message:"Blog updated successfully",

            })
        }
        else{
            return NextResponse.json({
                success:false,
                message:"No blog found with this id"
            })
        }

    } catch (error) {
        console.log(error);
        NextResponse.json({
            success:false,
            message:"Something went wrong"
        })
        
    }
}