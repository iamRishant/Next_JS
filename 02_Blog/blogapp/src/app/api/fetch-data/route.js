import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";






// this is an api route so it should have an method in this case we have post method
export async function GET(){
    try {
        // first connect to database
        await connectToDB();
        // when database connection is established

        // get all blog post using find method
        const getAllBlogs= await Blog.find({});//find method will give us all the saved blogs in Blog databse

        // check if blog existe send in the form of data line 24
        if(getAllBlogs){
            return NextResponse.json({
                success:true,
                message:"All blogs fetched successfully",
                data:getAllBlogs// we have to pass the data
            })
        }
        else{
            return NextResponse.json({
                success:false,
                message:"No Blogs Found"

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